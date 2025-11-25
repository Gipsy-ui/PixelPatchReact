import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();



import businessRoutes from "./routes/businessRoutes.js";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import otpRoutes from "./routes/otp.js";
import uploadRoutes from "./routes/upload.js";
import aiRouter from "./routes/ai.js";

import shopRoutes from "./routes/shops.js";
import servicesRoutes from "./routes/services.js";
import reviewsRoutes from "./routes/reviews.js";
import documentsRoutes from "./routes/documents.js";
import shopServiceRoutes from "./routes/shopServiceRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* AUTH / USER */
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth", otpRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/ai", aiRouter);

// SHOP APIs
app.use("/api/shops", shopRoutes);
app.use("/api/shops", servicesRoutes);
app.use("/api/shops", reviewsRoutes);
app.use("/api/shops", documentsRoutes);
app.use("/api/shop-services", shopServiceRoutes);

/* BUSINESS */
app.use("/api", businessRoutes);

/* CHAT */
// app.use("/api/chat", chatRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


app.use("/api/shop-services", shopServiceRoutes);

