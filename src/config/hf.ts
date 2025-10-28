import axios from "axios";
import { loadEnv } from "./env";

const { HF_TOKEN } = loadEnv();

export const hf = axios.create({
  baseURL: "https://api-inference.huggingface.co/models",
  headers: {
    Authorization: `Bearer ${HF_TOKEN}`,
  },
});
