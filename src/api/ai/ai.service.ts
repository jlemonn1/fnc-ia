import { hf } from "../../config/hf";
import { logger } from "../../utils/logger";

interface GenerateImageParams {
  mode: "txt2img" | "img2img";
  prompt: string;
  imageBase64?: string;
}

export async function generateImage({ mode, prompt, imageBase64 }: GenerateImageParams) {
  try {
    const model = "stabilityai/stable-diffusion-xl-base-1.0";

    let payload: Record<string, unknown> = { inputs: prompt };

    if (mode === "img2img" && imageBase64) {
      payload = { inputs: prompt, image: imageBase64 };
    }

    const response = await hf.post<unknown>(`/${model}`, payload, {
      responseType: "arraybuffer",
      headers: { Accept: "image/png" },
    });

    // 👇 Cast explícito para que Buffer lo acepte
    const data = response.data as ArrayBuffer;
    const buffer = Buffer.from(data);
    const base64 = buffer.toString("base64");
    const imageUrl = `data:image/png;base64,${base64}`;

    logger.info("✅ Imagen generada con Hugging Face");
    return imageUrl;
  } catch (error: any) {
    logger.error(error.response?.data || error.message);
    throw new Error("Error al generar imagen con Hugging Face API");
  }
}
