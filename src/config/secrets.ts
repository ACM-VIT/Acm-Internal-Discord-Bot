import dotenv from "dotenv";
import Logger from "../core/Logger";
dotenv.config({ path: ".env" });

export const DISCORD_TOKEN = process.env.TOKEN;
export const environment = process.env.NODE_ENV;
export const logDirectory = process.env.LOG_DIR;
if (!DISCORD_TOKEN) {
  Logger.error("No 'discord token' provided in .env file.");
}
