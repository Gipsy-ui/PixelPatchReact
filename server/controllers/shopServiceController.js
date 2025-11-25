import db from "../config/db.js";

export const getServiceCategories = (req, res) => {
  const sql = `
    SELECT COLUMN_TYPE 
    FROM information_schema.COLUMNS 
    WHERE TABLE_NAME = 'shop_services' 
      AND COLUMN_NAME = 'category'
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    const raw = result[0].COLUMN_TYPE;        // enum('SMARTPHONE','DESKTOP',...)
    const categories = raw
      .replace("enum(", "")
      .replace(")", "")
      .replace(/'/g, "")
      .split(",");

    res.json({ categories });
  });
};
