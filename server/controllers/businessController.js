import db from "../config/db.js";

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
