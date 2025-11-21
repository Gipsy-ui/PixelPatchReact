import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import otpRoutes from "./routes/otp.js";
import uploadRoutes from "./routes/upload.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded images publicly
app.use("/uploads", express.static("uploads"));

// Register routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth", otpRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
