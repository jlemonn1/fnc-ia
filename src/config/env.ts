import dotenv from "dotenv";
dotenv.config();

export const loadEnv = () => {
  const HF_TOKEN = process.env.HF_TOKEN;
  const PORT = process.env.PORT || 3000;

  if (!HF_TOKEN) {
    throw new Error("❌ Falta HF_TOKEN en el entorno (.env)");
  }

  return { HF_TOKEN, PORT };
};
