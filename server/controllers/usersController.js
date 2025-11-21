import db from "../config/db.js";

// GET all users
export const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET user by ID
export const getUserById = (req, res) => {
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.length === 0)
        return res.status(404).json({ error: "User not found" });
      res.json(result[0]);
    }
  );
};

// Create user
export const createUser = (req, res) => {
  const data = req.body;

  db.query(
    `
    INSERT INTO users (role_id, first_name, middle_name, last_name, birthdate, email, phone, password_hash, photo_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      data.role_id || 1,
      data.first_name,
      data.middle_name,
      data.last_name,
      data.birthdate,
      data.email,
      data.phone,
      data.password_hash,
      data.photo_url || null,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "User created", user_id: result.insertId });
    }
  );
};

// Update user
export const updateUser = (req, res) => {
  db.query(
    "UPDATE users SET ? WHERE id = ?",
    [req.body, req.params.id],
    err => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "User updated" });
    }
  );
};

// Delete user
export const deleteUser = (req, res) => {
  db.query("DELETE FROM users WHERE id = ?", [req.params.id], err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted" });
  });
};
