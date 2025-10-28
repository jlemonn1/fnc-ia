import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // máximo 5 peticiones por IP/minuto
  message: { error: "Demasiadas peticiones, intenta de nuevo en un minuto." },
  standardHeaders: true,
  legacyHeaders: false,
});
