// controllers/aiController.js
import OpenAI from "openai";
import db from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// small helper to check word boundaries
const wordMatch = (text = "", words = []) => {
  const lower = (text || "").toLowerCase();
  return words.some(w => {
    const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp("\\b" + escaped + "\\b", "i");
    return pattern.test(lower);
  });
};

// map many device/service keywords to database categories
const deviceToCategory = (text = "") => {
  const lower = (text || "").toLowerCase();

  // If service name keywords present, return explicit category
  const smartphone = ["phone", "mobile", "android", "iphone", "smartphone", "screen", "lcd", "battery", "charging", "charging port"];
  const desktop = ["desktop", "pc", "motherboard", "hard drive", "hdd", "ssd", "motherboard", "screen replacement (desktop not common)"];
  const tablet = ["tablet", "ipad", "galaxy tab", "tablet screen"];
  const controller = ["controller", "joy-con", "joystick", "controller drift", "switch controller"];

  if (wordMatch(lower, smartphone)) return "SMARTPHONE";
  if (wordMatch(lower, tablet)) return "TABLET";
  if (wordMatch(lower, controller)) return "CONTROLLER";
  if (wordMatch(lower, desktop)) return "DESKTOP";

  return null; // unknown
};

// try to infer specific service name (screen, battery, diagnostic, etc.)
const inferServiceName = (text = "") => {
  const keywords = [
    { key: "Screen Replacement", words: ["screen", "lcd", "display", "cracked", "flicker"] },
    { key: "Battery Replacement", words: ["battery", "not charging", "won't charge", "not charging", "battery drain"] },
    { key: "Water Damage Diagnostic", words: ["water", "liquid", "wet", "dropped in water"] },
    { key: "Charging Port Repair", words: ["charging port", "charger port", "usb port", "charge port"] },
    { key: "Controller Drift Repair", words: ["drift", "joystick", "joy-con", "controller drift"] },
    { key: "Laptop Motherboard Repair", words: ["motherboard", "no power", "won't boot", "no post", "dead pc", "not turning on", "motherboard"] },
    { key: "Phone Diagnostics", words: ["diagnostic", "diagnose", "unknown issue", "not working", "weird behavior"] }
  ];

  const lower = (text || "").toLowerCase();
  for (const k of keywords) {
    if (wordMatch(lower, k.words)) return k.key;
  }
  return null;
};

export const analyzeIssue = async (req, res) => {
  try {
    const { history, user_lat, user_lng } = req.body;

    if (!history || !Array.isArray(history)) {
      return res.status(400).json({ error: "History array required" });
    }

    // Build messages for the LLM
    const messages = [
      {
        role: "system",
        content: `
          You are PixelPatch AI.
          Be a friendly technician: ask one question at a time, guide step-by-step, and avoid recommending shops until troubleshooting is exhausted or the user explicitly asks.
          Speak naturally (no JSON).
        `
      },
      ...history.map(m => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text
      }))
    ];

    // call OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.4,
      messages
    });

    const aiReply = (completion.choices?.[0]?.message?.content) || "";

    // Determine the last meaningful user message
    const lastUserMsgObj = [...history].reverse().find(m => m.sender === "user");
    const lastUserText = lastUserMsgObj ? (lastUserMsgObj.text || "").trim() : "";

    // Guard: ignore tiny/noisy inputs
    if (!lastUserText || lastUserText.length < 3) {
      return res.json({ reply: aiReply, shops: [] });
    }

    // Does the user explicitly ask for shops?
    const userShopRequestWords = [
      "shop", "shops", "nearby", "near me", "recommend", "recommendation", "technician",
      "service center", "where to", "where can i", "send shops", "send shop", "best shop"
    ];
    const userExplicitRequest = wordMatch(lastUserText, userShopRequestWords);

    // Did the AI already suggest shop/repair?
    const aiReplySuggestsShop = wordMatch(aiReply, [
      "repair shop", "technician", "service center", "needs repair", "take it in", "bring it in", "should see"
    ]);

    // Count assistant troubleshooting attempts in recent assistant messages
    const troubleshootingHints = ["try", "restart", "reboot", "charge", "check", "clean", "reset", "safe mode", "unplug", "diagnose", "diagnostics", "test"];
    const assistantMsgs = history.filter(h => h.sender === "ai" || h.sender === "assistant");
    const assistantTroublesCount = assistantMsgs.reduce((acc, m) => {
      if (wordMatch(m.text, troubleshootingHints)) return acc + 1;
      return acc;
    }, 0);

    // Detect if a concrete problem was described (simple heuristic)
    const problemKeywords = ["screen", "lcd", "battery", "charging", "won't", "wont", "not turning", "dead", "stuck", "drift", "overheat", "water", "won't turn", "no power"];
    const recentUserMessages = history.filter(h => h.sender === "user").slice(-4);
    const problemDetected = recentUserMessages.some(mu => wordMatch(mu.text, problemKeywords));

    // Decide whether to recommend. Criteria:
    // 1) user explicitly asked OR
    // 2) AI already suggested taking to a shop OR
    // 3) problemDetected && assistantTroublesCount >= 2  (we tried some steps)
    const shouldRecommend = userExplicitRequest || aiReplySuggestsShop || (problemDetected && assistantTroublesCount >= 2);

    if (!shouldRecommend) {
      return res.json({ reply: aiReply, shops: [] });
    }

    // --- Determine desired category/service from the user's messages (prefer explicit service words) ---
    const combinedUserText = recentUserMessages.map(m => m.text).join(" ");
    const serviceCategory = deviceToCategory(combinedUserText); // SMARTPHONE/TABLET/DESKTOP/CONTROLLER or null
    const guessedService = inferServiceName(combinedUserText); // e.g., "Screen Replacement"

    // -- SQL: fetch shops that are verified and that offer relevant services if we can determine service/category
    // If we have a category or guessedService we filter by that to find matching shops.
    // We'll compute distance_km if user_lat/lng provided and compute a weighted score: 70% rating, 30% distance (closer is better).
    let sql;
    let params = [];

    if (typeof user_lat === "number" && typeof user_lng === "number") {
      // With distance calculation
      sql = `
        SELECT
          s.id,
          s.name,
          s.rating_average,
          a.street,
          a.barangay,
          a.province,
          a.region,
          a.country,
          (
            6371 * acos(
              cos(radians(?)) * cos(radians(a.latitude)) *
              cos(radians(a.longitude) - radians(?)) +
              sin(radians(?)) * sin(radians(a.latitude))
            )
          ) AS distance_km,
          ss.name AS service_name,
          ss.category as service_category
        FROM shops s
        JOIN addresses a ON a.id = s.address_id
        JOIN shop_services ss ON ss.shop_id = s.id
        WHERE s.is_verified = 1
      `;

      params = [user_lat, user_lng, user_lat];

      if (serviceCategory) {
        sql += " AND ss.category = ?";
        params.push(serviceCategory);
      } else if (guessedService) {
        // look for services with this name (simple LIKE)
        sql += " AND ss.name LIKE ?";
        params.push(`%${guessedService.split(" ")[0]}%`); // basic
      }

      sql += `
        GROUP BY s.id
        HAVING COUNT(ss.id) >= 0
      `;

      // compute a score expression for ordering: rating normalized (0-1), distance normalized by 50km ceiling
      // We'll compute the score in JavaScript after fetching (safer), but order by rating and distance server-side for reasonable results.
      sql += " ORDER BY s.rating_average DESC, distance_km ASC LIMIT 20;";
    } else {
      // No user location — fall back to rating & service match
      sql = `
        SELECT
          s.id,
          s.name,
          s.rating_average,
          a.street,
          a.barangay,
          a.province,
          a.region,
          a.country,
          NULL AS distance_km,
          ss.name AS service_name,
          ss.category as service_category
        FROM shops s
        JOIN addresses a ON a.id = s.address_id
        JOIN shop_services ss ON ss.shop_id = s.id
        WHERE s.is_verified = 1
      `;
      if (serviceCategory) {
        sql += " AND ss.category = ?";
        params = [serviceCategory];
      } else if (guessedService) {
        sql += " AND ss.name LIKE ?";
        params = [`%${guessedService.split(" ")[0]}%`];
      }
      sql += " GROUP BY s.id ORDER BY s.rating_average DESC LIMIT 20;";
    }

    db.query(sql, params, (err, rows) => {
      if (err) {
        console.error("DB ERROR:", err);
        return res.status(500).json({ error: "Database error" });
      }

      // rows -> compute final score if distance exists
      const shops = rows.map(r => {
        const parts = [
          r.street || "",
          r.barangay || "",
          r.province || "",
          r.region || "",
          r.country || ""
        ].map(p => p && p.toString().trim()).filter(Boolean);

        const address = parts.length ? parts.join(", ") : "Unknown";

        return {
          id: r.id,
          name: r.name,
          rating_average: Number(r.rating_average) || 0,
          distance_km: typeof r.distance_km === "number" ? Number(r.distance_km) : null,
          address
        };
      });

      // If we have distances, compute a combined score and sort
      const MAX_DISTANCE = 50; // km (cap)
      const RATING_WEIGHT = 0.7;
      const DISTANCE_WEIGHT = 0.3;

      const shopsWithScore = shops.map(s => {
        const ratingNorm = Math.min(Math.max(s.rating_average / 5, 0), 1); // 0..1
        const distanceNorm = s.distance_km !== null ? Math.min(s.distance_km / MAX_DISTANCE, 1) : 1; // 0 (close) .. 1 (far)
        const distanceScore = 1 - distanceNorm; // closer -> higher
        const score = ratingNorm * RATING_WEIGHT + distanceScore * DISTANCE_WEIGHT;
        return { ...s, score };
      });

      // if no distance values (all null) then score is driven by rating (distanceScore treated 0)
      shopsWithScore.sort((a, b) => {
        // primary: score descending
        if (b.score !== a.score) return b.score - a.score;
        // fallback: rating
        if (b.rating_average !== a.rating_average) return b.rating_average - a.rating_average;
        // fallback: distance asc (nulls last)
        if (a.distance_km === null) return 1;
        if (b.distance_km === null) return -1;
        return a.distance_km - b.distance_km;
      });

      // pick top 1 as "best", rest as others (but keep top 3 grouping if you want)
      const best = shopsWithScore.length ? shopsWithScore[0] : null;
      const others = shopsWithScore.slice(1);

      return res.json({
        reply: aiReply,
        shops: shopsWithScore,
        best,
        others
      });
    });

  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI processing error" });
  }
};
