import express from "express";
import { processLeads, getLeads } from "../controllers/leadController.js";

const router = express.Router();

router.post("/process", processLeads);
router.get("/all", getLeads);

export default router;
