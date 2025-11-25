import express from "express";
import { authRequired } from "../middleware/authMiddleware.js";
import {
  startConversation,
  sendMessage,
  getMessages,
  getUserConversations
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/start", authRequired, startConversation);
router.post("/send", authRequired, sendMessage);
router.get("/conversation/:id", authRequired, getMessages);
router.get("/", authRequired, getUserConversations);

export default router;
