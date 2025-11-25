import express from "express";
import { startChat } from "../controllers/chatController.js";

const router = express.Router();

router.post("/start", startChat);

export default router;
