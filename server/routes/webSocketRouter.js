import { webSocketController } from "../controllers/webSocketController.js";
import express from "express";

export const wsRouter = (wss) => {
  const router = express.Router();

  router.ws("/", (ws, req) => {
    webSocketController(ws, req, wss);
  });

  return router;
};
