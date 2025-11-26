import expressAsyncHandler from "express-async-handler";
import { UserLog } from "../models/userLogModel.js";
import {
  sendSmokeAlertEmail,
  sendAirQualityAlertEmail,
  sendSmokeAndAirQualityAlertEmail,
} from "../resend/emails.js";

//desc    Set alert log
//route   POST /api/add
//access  Public
export const setAlertLog = expressAsyncHandler(async (req, res) => {
  const {
    temperatureVal,
    humidityVal,
    smokeVal,
    alcoholVal,
    carbonDioxideVal,
    ammoniaVal,
  } = req.body;
  if (
    !temperatureVal ||
    !humidityVal ||
    !carbonDioxideVal ||
    !smokeVal ||
    !ammoniaVal ||
    !alcoholVal
  ) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const userLog = await UserLog.create({
    temperatureVal: temperatureVal,
    humidityVal: humidityVal,
    smokeVal: smokeVal,
    alcoholVal: alcoholVal,
    carbonDioxideVal: carbonDioxideVal,
    ammoniaVal: ammoniaVal,
  });

  res.status(201).json({ userLog });
});

// @desc    Get user logs
// @route   GET /api/logs
// @access  Private
export const getUserLogs = expressAsyncHandler(async (req, res) => {
  const logs = await UserLog.find({});
  res.status(200).json(logs);
});
