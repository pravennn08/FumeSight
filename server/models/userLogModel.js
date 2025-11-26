import mongoose from "mongoose";

const userLogSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export const UserLog = mongoose.model("UserLog", userLogSchema);
