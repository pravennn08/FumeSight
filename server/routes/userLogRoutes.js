import express from "express";
import { setAlertLog, getUserLogs } from "../controllers/userLogController.js";
export const userLogRouter = express.Router();

userLogRouter.post("/add", setAlertLog);
userLogRouter.get("/logs", getUserLogs);
