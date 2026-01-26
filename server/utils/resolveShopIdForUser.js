import db from "../config/db.js";

export function resolveShopIdForUser(req, cb) {
  console.log("🧠 resolveShopIdForUser START");

  if (!req.user || !req.user.id) {
    console.log("❌ No req.user.id");
    return cb(null, null);
  }

  db.query(
    `SELECT id FROM shops WHERE user_id = ? LIMIT 1`,
    [req.user.id],
    (err, rows) => {
      console.log("🧠 resolveShopIdForUser QUERY RESULT");
      console.log("ERR:", err);
      console.log("ROWS:", rows);

      if (err) return cb(err);
      if (!rows || rows.length === 0) return cb(null, null);

      cb(null, rows[0].id);
    }
  );
}
