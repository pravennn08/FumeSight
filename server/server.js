import express from "express";
import dotenv from "dotenv";
import ip from "ip";
import cookieParser from "cookie-parser";
import { userLogRouter } from "./routes/userLogRoutes.js";
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cokies
app.use(cookieParser());

// Cors
app.use(corsMiddleware);

// Logger
app.use(logger);

// Middlewares
app.use(errorHandler);
app.use(notFound);

// Routers
app.use("/api", userLogRouter);
// app.use("api/auth" userRouetes);

app.listen(PORT, () => {
  console.log(`Server is running at http://${ip.address()}:${PORT}`.green.bold);
});
