import express from "express";
import { authRequired } from "../middleware/authMiddleware.js";
import { registerBusiness } from "../controllers/businessController.js";

const router = express.Router();

router.post("/business-register", authRequired, registerBusiness);

export default router;
