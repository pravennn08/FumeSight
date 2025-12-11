import mongoose from "mongoose";
import { calculateSensorStatus } from "../middleware/sensorMiddleware.js";

const userLogSchema = mongoose.Schema(
  {
    temperatureVal: {
      type: Number,
    },
    humidityVal: {
      type: Number,
    },
    smokeVal: {
      type: Number,
    },
    alcoholVal: {
      type: Number,
    },
    carbonDioxideVal: {
      type: Number,
    },
    ammoniaVal: {
      type: Number,
    },
    tempStatus: {
      type: String,
      enum: ["Safe", "Warning", "Danger", "Critical"],
      default: "Safe",
    },
    humidStatus: {
      type: String,
      enum: ["Safe", "Warning", "Danger", "Critical"],
      default: "Safe",
    },
    smokeStatus: {
      type: String,
      enum: ["Safe", "Warning", "Danger", "Critical"],
      default: "Safe",
    },
    alcoholStatus: {
      type: String,
      enum: ["Safe", "Warning", "Danger", "Critical"],
      default: "Safe",
    },
    carbonDioxideStatus: {
      type: String,
      enum: ["Safe", "Warning", "Danger", "Critical"],
      default: "Safe",
    },
    ammoniaStatus: {
      type: String,
      enum: ["Safe", "Warning", "Danger", "Critical"],
      default: "Safe",
    },
  },
  { timestamps: true }
);

// Keep your middleware
userLogSchema.pre("save", calculateSensorStatus);

export const UserLog = mongoose.model("UserLog", userLogSchema);
