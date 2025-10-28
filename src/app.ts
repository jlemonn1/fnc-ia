import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./api";
import { errorHandler } from "./middleware/errorHandler";
import { rateLimiter } from "./middleware/rateLimiter";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(rateLimiter);
app.use("/api", routes);

app.get("/api/ping", (_req: any, res: { json: (arg0: { status: string; message: string; }) => void; }) => {
  res.json({ status: "ok", message: "🚀 Backend FNC IA activo en Vercel" });
});

app.use(errorHandler);

export default app;
