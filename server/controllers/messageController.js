import db from "../config/db.js";

// Start conversation or return existing one
export const startConversation = (req, res) => {
  const user1 = req.user.id;
  const { otherUser } = req.body;

  const checkSql = `
    SELECT * FROM conversations 
    WHERE (user_one = ? AND user_two = ?)
    OR (user_one = ? AND user_two = ?)
    LIMIT 1
  `;

  db.query(checkSql, [user1, otherUser, otherUser, user1], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.length > 0) {
      return res.json({ conversation_id: result[0].id });
    }

    const createSql = `INSERT INTO conversations (user_one, user_two) VALUES (?, ?)`;
    db.query(createSql, [user1, otherUser], (err, result) => {
      if (err) return res.status(500).json({ error: err });

      return res.json({ conversation_id: result.insertId });
    });
  });
};

// Send a message
export const sendMessage = (req, res) => {
  const sender = req.user.id;
  const { conversation_id, message } = req.body;

  const sql = `INSERT INTO messages (conversation_id, sender_id, message) VALUES (?, ?, ?)`;

  db.query(sql, [conversation_id, sender, message], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};

// Load conversation messages
export const getMessages = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT * FROM messages 
    WHERE conversation_id = ?
    ORDER BY created_at ASC
  `;

  db.query(sql, [id], (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

// List conversations for logged in user
export const getUserConversations = (req, res) => {
  const userId = req.user.id;

  const sql = `
    SELECT * FROM conversations
    WHERE user_one = ? OR user_two = ?
    ORDER BY created_at DESC
  `;

  db.query(sql, [userId, userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};
