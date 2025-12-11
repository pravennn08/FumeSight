import axios, { AxiosError } from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true;

export interface LogData {
  id: string;
  date: string;
  temperatureVal: number;
  humidityVal: number;
  smokeVal: number;
  alcoholVal: number;
  carbonDioxideVal: number;
  ammoniaVal: number;
}
export type SensorData = LogData;

interface SensorDataStore {
  logs: LogData[];
  isError: string | null;
  isLoading: boolean;
  message: string;
  setUserLogs: (
    temperatureVal: number,
    humidityVal: number,
    smokeVal: number,
    alcoholVal: number,
    carbonDioxideVal: number,
    ammoniaVal: number
  ) => Promise<void>;
  getUserLogs: () => Promise<void>;
}

export const useLogStore = create<SensorDataStore>((set) => ({
  logs: [],
  isError: null,
  isLoading: false,
  message: "",

  setUserLogs: async (
    temperatureVal: number,
    humidityVal: number,
    smokeVal: number,
    alcoholVal: number,
    carbonDioxideVal: number,
    ammoniaVal: number
  ) => {
    try {
      const response = await axios.post(`${API_URL}add`, {
        temperatureVal,
        humidityVal,
        smokeVal,
        alcoholVal,
        carbonDioxideVal,
        ammoniaVal,
      });

      const newLog = response.data;
      set((state) => ({
        logs: [
          ...state.logs,
          {
            id: newLog._id || `log-${Date.now()}`,
            date: newLog.createdAt || new Date().toISOString(),
            temperatureVal: newLog.temperatureVal,
            humidityVal: newLog.humidityVal,
            smokeVal: newLog.smokeVal,
            alcoholVal: newLog.alcoholVal,
            carbonDioxideVal: newLog.carbonDioxideVal,
            ammoniaVal: newLog.ammoniaVal,
          },
        ],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Failed to add logs:", error);
      set({ isError: "Failed to add logs", isLoading: false });
      throw error;
    }
  },

  getUserLogs: async () => {
    try {
      const response = await axios.get(`${API_URL}logs`);
      let rawLogs = [];

      if (Array.isArray(response.data)) {
        rawLogs = response.data;
      } else if (response.data && response.data.logs) {
        rawLogs = response.data.logs;
      } else if (response.data && response.data.data) {
        rawLogs = response.data.data;
      }

      const formattedLogs = rawLogs.map((log: any) => ({
        id: log.id || log._id || `log-${Date.now()}`,
        date: log.date || log.createdAt || new Date().toISOString(),
        temperatureVal: Number(log.temperatureVal) || 0,
        humidityVal: Number(log.humidityVal) || 0,
        smokeVal: Number(log.smokeVal) || 0,
        alcoholVal: Number(log.alcoholVal) || 0,
        carbonDioxideVal: Number(log.carbonDioxideVal) || 0,
        ammoniaVal: Number(log.ammoniaVal) || 0,
      }));

      set({
        logs: formattedLogs,
        isLoading: false,
        message: `Loaded ${formattedLogs.length} logs`,
        isError: null,
      });
    } catch (error) {
      const err = error as AxiosError<any>;
      const errorMessage =
        err.response?.data?.message || `Failed to fetch logs - ${err.message}`;
      console.error("Error fetching logs:", errorMessage);
      set({
        isError: errorMessage,
        isLoading: false,
        logs: [],
      });
    }
  },
}));
