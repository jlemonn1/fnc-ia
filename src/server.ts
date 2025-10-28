import app from "./app";
import { loadEnv } from "./config/env";
import { logger } from "./utils/logger";

const { PORT } = loadEnv();

app.listen(PORT, () => {
  logger.info(`🚀 Servidor backend escuchando en puerto ${PORT}`);
});
