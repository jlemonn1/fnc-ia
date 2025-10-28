import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./api";
import { errorHandler } from "./middleware/errorHandler";
import { rateLimiter } from "./middleware/rateLimiter";

dotenv.config();

const app = express();

// 🔹 Middlewares globales
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(rateLimiter);

// 🔹 Rutas principales
app.use("/api", routes);

// 🔹 Manejador global de errores
app.use(errorHandler);

export default app;
