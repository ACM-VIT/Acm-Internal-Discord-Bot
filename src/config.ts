import Logger from "./core/Logger";

export const environment = process.env.NODE_ENV;
export const logDirectory = process.env.LOG_DIR;

export const token = process.env.TOKEN;

if (!token) Logger.error("No discord token mentioned in the .env file");
