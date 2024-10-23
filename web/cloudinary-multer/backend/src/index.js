import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // To handle CORS
import helmet from "helmet"; // For security headers
import rateLimit from "express-rate-limit"; // To limit requests
import uploadRoute from "./controller/routeUpload.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for security, request limits, and JSON parsing
app.use(helmet()); // Security headers
app.use(cors()); // Allow cross-origin requests (you can configure allowed origins)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiter to protect against DoS attacks
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// The upload route
app.use("/upload", uploadRoute);

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
