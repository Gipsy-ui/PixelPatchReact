import express from "express";
import { analyzeIssue } from "../controllers/aiController.js";

const router = express.Router();

router.post("/analyze", analyzeIssue);

export default router;
