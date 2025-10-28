import { Router } from "express";
import { generateImageController } from "./ai.controller";

const router = Router();

// POST /api/ai/generate
router.post("/generate", generateImageController);

export default router;
