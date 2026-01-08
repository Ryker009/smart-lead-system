import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import startCron from "./cron/syncLeads.js";
import dotenv from "dotenv";

// Load env vars
dotenv.config();

connectDB();
startCron();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
