import { Request, Response } from "express";
import { generateImage } from "./ai.service";
import { logger } from "../../utils/logger";

export const generateImageController = async (req: Request, res: Response) => {
  try {
    const { mode, prompt, imageBase64 } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt requerido" });
    }

    const imageUrl = await generateImage({ mode, prompt, imageBase64 });

    res.status(200).json({ imageUrl });
  } catch (error: any) {
    logger.error(error.message);
    res.status(500).json({ error: "Error generando la imagen" });
  }
};
