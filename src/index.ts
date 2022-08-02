import { config } from "dotenv";
import startServer from "./app";
import { logger } from "utils/logger";

config();
startServer().catch((e) => logger.error(e));
