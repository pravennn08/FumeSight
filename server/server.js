import express from "express";
import expressWs from "express-ws";
import dotenv from "dotenv";
import ip from "ip";
import cookieParser from "cookie-parser";
import { userLogRouter } from "./routes/userLogRoutes.js";
import { webSocketController } from "./controllers/webSocketController.js";
import { connectDB } from "./config/db.js";
import { logger } from "./middleware/loggerMiddleware.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { notFound } from "./middleware/notFoundMiddleware.js";
import { corsMiddleware } from "./middleware/corsMiddleware.js";
import colors from "colors";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

// Attach WebSocket
const wsInstance = expressWs(app);
const wss = wsInstance.getWss(); // WebSocket server instance for broadcasting

app.use((req, res, next) => {
  if (req.path === "/ws") return next();
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookies
app.use(cookieParser());

// CORS
app.use(corsMiddleware);

// Logger
app.use(logger);

// HTTP API routes
app.use("/api", userLogRouter);

// WebSocket route directly on app
app.ws("/ws", (ws, req) => webSocketController(ws, req, wss));

// Error handling
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running at http://${ip.address()}:${PORT}`.green.bold);
});
