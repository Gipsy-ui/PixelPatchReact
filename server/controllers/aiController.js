import OpenAI from "openai";
import db from "../config/db.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const analyzeIssue = async (req, res) => {
  try {
    const { history } = req.body;

    if (!history || !Array.isArray(history)) {
      return res.status(400).json({ error: "History array required" });
    }

    const messages = [
      {
        role: "system",
        content: `
          You are PixelPatch AI. 
          Speak naturally. Troubleshoot step-by-step.
          Do NOT recommend a repair shop unless necessary.
          No JSON output. Just normal conversation.
        `
      },
      ...history.map(m => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text
      }))
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.4,
      messages
    });

    const aiReply = completion.choices[0].message.content;

    // if AI thinks repair is needed
    const lowered = aiReply.toLowerCase();

    const repairIndicators = [
      "repair shop",
      "repair",
      "technician",
      "needs repair",
      "service center",
      "replace",
      "not fixable",
      "cannot fix",
      "professional help",
      "hardware issue",
      "battery replaced",
      "screen replacement",
      "bring it in",
      "take it in"
    ];

    const shouldRecommend = repairIndicators.some(keyword =>
      lowered.includes(keyword)
    );


    // Fetch shops
    const sql = `
      SELECT 
        s.id,
        s.name,
        s.rating_average,
        a.street,
        a.barangay,
        a.province,
        a.region,
        a.country
      FROM shops s
      LEFT JOIN addresses a ON a.id = s.address_id
      LIMIT 5;
    `;

    db.query(sql, (err, shops) => {
      if (err) return res.status(500).json({ error: "Database error" });

      const formatted = shops.map(s => ({
        id: s.id,
        name: s.name,
        rating_average: s.rating_average,
        address: `${s.street ?? ""}, ${s.barangay}, ${s.province}, ${s.region}, ${s.country}`
      }));

      return res.json({
        reply: aiReply,
        shops: formatted
      });
    });

  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI processing error" });
  }
};
