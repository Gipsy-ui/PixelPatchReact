// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const authHeader =
    req.headers.authorization || req.headers.Authorization;

  console.log("🔐 AUTH HEADER:", authHeader);
  console.log("VERIFY SECRET:", process.env.JWT_SECRET);

  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    console.log("👤 AUTHENTICATED USER:", req.user);

    return next(); // ✅ ONLY ONE next()
  } catch (err) {
    return res.status(401).json({ error: "Invalid token bro" });
  }
};
