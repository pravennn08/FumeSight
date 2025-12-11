import cors from "cors";

export const corsMiddleware = cors({
  origin: [
    "http://localhost:3000", // No trailing slash
    "http://localhost:3000/", // With trailing slash (for flexibility)
    "http://127.0.0.1:3000", // Alternative localhost
    "http://127.0.0.1:3000/", // With trailing slash
    process.env.FRONTEND_URL,
  ],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
});
