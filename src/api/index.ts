import { Router } from "express";
import aiRoutes from "./ai/ai.routes";

// 🔹 Crea el enrutador principal de la API
const router = Router();

// 🔹 Rutas específicas
router.use("/ai", aiRoutes);

// 🔹 Endpoint de prueba (opcional)
router.get("/ping", (req: any, res: { json: (arg0: { status: string; message: string; }) => void; }) => {
  res.json({ status: "ok", message: "API principal activa 🚀" });
});

export default router;
