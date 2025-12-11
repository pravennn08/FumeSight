import expressAsyncHandler from "express-async-handler";
import { UserLog } from "../models/userLogModel.js";
import {
  sendSmokeAlertEmail,
  sendAirQualityAlertEmail,
  sendAlcoholAlertEmail,
  sendTemperatureAlertEmail,
  sendAmmoniaAlertEmail,
} from "../resend/emails.js";
import dotenv from "dotenv";
dotenv.config();

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

  if (temperatureVal >= 30) {
    await sendTemperatureAlertEmail(process.env.EMAIL, temperatureVal);
  }
  if (smokeVal >= 50) {
    await sendSmokeAlertEmail(process.env.EMAIL, smokeVal);
  }
  if (alcoholVal >= 10) {
    await sendAlcoholAlertEmail(process.env.EMAIL, alcoholVal);
  }
  if (carbonDioxideVal >= 1000) {
    await sendAirQualityAlertEmail(process.env.EMAIL, carbonDioxideVal);
  }
  if (ammoniaVal >= 10) {
    await sendAmmoniaAlertEmail(process.env.EMAIL, ammoniaVal);
  }

  const userLog = await UserLog.create({
    temperatureVal: Number(temperatureVal),
    humidityVal: Number(humidityVal),
    smokeVal: Number(smokeVal),
    alcoholVal: Number(alcoholVal),
    carbonDioxideVal: Number(carbonDioxideVal),
    ammoniaVal: Number(ammoniaVal),
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
