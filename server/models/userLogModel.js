import mongoose from "mongoose";
import { calculateSensorStatus } from "../middleware/sensorMiddleware.js";

const userLogSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    temperatureVal: {
      type: Number,
      required: [true, "Please add a temperature value"],
    },
    humidityVal: {
      type: Number,
      required: [true, "Please add a humidity value"],
    },
    smokeVal: {
      type: Number,
      required: [true, "Please add a smoke value"],
    },
    alcoholVal: {
      type: Number,
      required: [true, "Please add a alcohol value"],
    },
    carbonDioxideVal: {
      type: Number,
      required: [true, "Please add a carbon dioxide value"],
    },
    ammoniaVal: {
      type: Number,
      required: [true, "Please add a ammonia value"],
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

userLogSchema.pre("save", calculateSensorStatus);
export const UserLog = mongoose.model("UserLog", userLogSchema);
