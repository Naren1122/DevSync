import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { prisma } from "./config/db.js";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Function to test database connection
async function testDatabaseConnection() {
  try {
    // Try to execute a simple query to test the connection
    await prisma.$executeRaw`SELECT 1`;
    console.log("✅ Connected to PostgreSQL database successfully");
    return true;
  } catch (error) {
     console.error(
       "❌ Failed to connect to PostgreSQL database:",
       error instanceof Error ? error.message : String(error),
     );
    return false;
  }
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true, // Crucial for receiving httpOnly cookies
  }),
);

// Health Check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "healthy", timestamp: new Date() });
});

// Start the server
app.listen(PORT, async () => {
  console.log(`🚀 DevSync backend running securely on port ${PORT}`);
  
  // Test database connection when server starts
  const dbConnected = await testDatabaseConnection();
  if (!dbConnected) {
    console.warn("⚠️  Database connection failed! Some features may not work properly.");
  }
});
