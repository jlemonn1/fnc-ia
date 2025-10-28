import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "../src/api";
import { errorHandler } from "../src/middleware/errorHandler";
import { rateLimiter } from "../src/middleware/rateLimiter";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(rateLimiter);

// Rutas principales
app.use("/api", routes);

// Manejador global de errores
app.use(errorHandler);

// 👉 En Vercel exportamos la app (no se usa app.listen)
export default app;
