import express from "express";
import { getServiceCategories } from "../controllers/shopServiceController.js";

const router = express.Router();

router.get("/categories", getServiceCategories);

export default router;
