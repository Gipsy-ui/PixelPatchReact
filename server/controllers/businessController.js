// server/controllers/businessController.js
import db from "../config/db.js";
import { resolveShopIdForUser } from "./repairController.js";

export const registerBusiness = async (req, res) => {
  try {
    const userId = req.user.id; // from JWT

    const {
      business_name,
      business_email,
      business_phone,
      region,
      province,
      city,
      barangay,
      street,
      postal_code,
      reg_first_name,
      reg_middle_name,
      reg_last_name,
      days_from,
      days_to,
      open_time,
      close_time,
      primary_doc,
      gov_id,
      services,
      payment_method,
      account_name,
      account_number,
      tin
    } = req.body;

    // -------------------------------
    // 1. Save address
    // -------------------------------
    const addressSql = `
      INSERT INTO addresses (region, province, city, barangay, street, postal_code)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const addressValues = [
      region, province, city, barangay, street, postal_code
    ];

    const addressResult = await new Promise((resolve, reject) => {
      db.query(addressSql, addressValues, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const addressId = addressResult.insertId;

    // -------------------------------
    // 2. Save shop
    // -------------------------------
    const shopSql = `
      INSERT INTO shops 
      (user_id, name, description, address_id, phone_number, email, days_from, days_to, open_time, closing_time, is_verified)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const shopValues = [
      userId,
      business_name,
      "Pending business",
      addressId,
      business_phone,
      business_email,
      days_from,
      days_to,
      open_time,
      close_time,
      0
    ];

    const shopResult = await new Promise((resolve, reject) => {
      db.query(shopSql, shopValues, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const shopId = shopResult.insertId;

    // -------------------------------
    // 3. Insert shop services (SAFE CATEGORY)
    // -------------------------------
    if (!Array.isArray(services)) {
      throw new Error("Services must be an array");
    }

    for (let svc of services) {
      if (!svc) continue;

      const category = (svc.category || "").toString().toUpperCase();
      const repairService = svc.repair_service || "Undefined Service";
      const price = parseFloat(svc.price || 0);
      const timeframe = `${svc.time_from || "0"}-${svc.time_to || "0"} ${svc.time_unit || "hours"}`;

      const serviceSql = `
        INSERT INTO shop_services 
        (shop_id, name, category, description, base_price, estimated_timeframe, accepts_pickup, accepts_onsite, accepts_dropoff, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, 0, 0, 1, NOW(), NOW())
      `;

      const serviceVals = [
        shopId,
        repairService,
        category,
        "Business submitted service",
        price,
        timeframe
      ];

      await new Promise((resolve, reject) => {
        db.query(serviceSql, serviceVals, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }

    // -------------------------------
    // 4. Insert payout info (SAFE PAYMENT METHOD)
    // -------------------------------
    const safeMethod = (payment_method || "").toString().toUpperCase();

    const payoutSql = `
      INSERT INTO shop_payouts 
      (shop_id, method, account_name, account_number, status)
      VALUES (?, ?, ?, ?, ?)
    `;

    const payoutValues = [
      shopId,
      safeMethod,
      account_name || "",
      account_number || "",
      "PENDING"
    ];

    await new Promise((resolve, reject) => {
      db.query(payoutSql, payoutValues, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    // -------------------------------
    // SUCCESS
    // -------------------------------
    return res.json({
      message: "Business registration submitted successfully!",
      shop_id: shopId
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};


// =====================================================
// GET BUSINESS SHOP FOR LOGGED-IN USER
// =====================================================
// Convert db.query to promise-based
function query(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

export const getMyShop = async (req, res) => {
  try {
    const userId = req.user.id;

    console.log("📌 getMyShop() called for user:", userId);

    // Use the promise-based wrapper
    const rows = await query(
      `SELECT id 
       FROM shops 
       WHERE user_id = ? 
       LIMIT 1`,
      [userId]
    );

    console.log("📌 Found shop rows:", rows);

    if (rows.length === 0) {
      return res.json({
        success: false,
        message: "This user does not own a shop."
      });
    }

    return res.json({
      success: true,
      shopId: rows[0].id
    });

  } catch (err) {
    console.error("❌ Error in getMyShop:", err);
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

export const getRepairDetails = async (req, res) => {
  try {
    const requestId = req.params.id;
    // DEBUG LOG
    console.log("📥 GET /repairs/:id");

    const shopId = await resolveShopIdForUser(req);
    // DEBUG LOG
    console.log("🔎 requestId:", requestId, "shopId:", shopId);
    console.log("🔎 getRepairById called with id:", req.params.id);

    if (!shopId) {
      return res.status(404).json({
        success: false,
        message: "Shop not found",
      });
    }

    const sql = `
      SELECT 
        sr.id,
        u.first_name AS client,
        d.name AS deviceType,
        sr.issue_description,
        sr.decision AS decisionStatus,
        sr.delivery_method,
        sr.preferred_date,
        GROUP_CONCAT(DISTINCT ss.name SEPARATOR ', ') AS services
      FROM service_requests sr
      JOIN users u ON sr.client_id = u.id
      JOIN devices d ON sr.device_id = d.id
      LEFT JOIN service_request_items sri ON sri.request_id = sr.id
      LEFT JOIN shop_services ss ON ss.id = sri.service_id
      WHERE sr.id = ? AND sr.shop_id = ?
      GROUP BY 
        sr.id,
        u.first_name,
        d.name,
        sr.issue_description,
        sr.decision,
        sr.delivery_method,
        sr.preferred_date
      LIMIT 1
    `;

    const rows = await query(sql, [requestId, shopId]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Repair request not found",
      });
    }

    const row = rows[0];

    // Normalize response for frontend
    const repair = {
      id: row.id,
      client: row.client,
      deviceType: row.deviceType,
      issueDescription: row.issue_description,
      decisionStatus: row.decisionStatus,
      deliveryMethod: row.delivery_method,
      preferredDate: row.preferred_date,
      services: row.services ? row.services.split(", ") : [],
      attachments: [] // we’ll populate this in Step 4
    };

    return res.json({
      success: true,
      repair,
    });

  } catch (err) {
    console.error("❌ Error loading repair details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }

};

