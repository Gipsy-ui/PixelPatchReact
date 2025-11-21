import db from "../config/db.js";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/hash.js";

/* ============================
        REGISTER
=============================== */
export const register = async (req, res) => {
  try {
    const {
      role_id,
      first_name,
      middle_name,
      last_name,
      birthdate,
      email,
      phone,
      password,
      photo_url
    } = req.body;

    // hash password
    const hashedPassword = await hashPassword(password);

    const sql = `
      INSERT INTO users 
      (role_id, first_name, middle_name, last_name, birthdate, email, phone, password_hash, photo_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        role_id || 1,
        first_name,
        middle_name,
        last_name,
        birthdate,
        email,
        phone,
        hashedPassword,
        photo_url || null,
      ],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Registration successful", user_id: result.insertId });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
/* ============================
        LOGIN
=============================== */
export const login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.length === 0)
        return res.status(400).json({ error: "Email not found" });

      const user = result[0];

      // compare password
      const isMatch = await comparePassword(password, user.password_hash);
      if (!isMatch)
        return res.status(400).json({ error: "Invalid credentials" });

      // create token
      const token = jwt.sign(
        { id: user.id, role_id: user.role_id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          role_id: user.role_id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          photo_url: user.photo_url,
        }
      });
    }
  );
};
