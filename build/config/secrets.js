"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logDirectory = exports.environment = exports.DISCORD_TOKEN = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const Logger_1 = __importDefault(require("../core/Logger"));
dotenv_1.default.config({ path: ".env" });
exports.DISCORD_TOKEN = process.env.TOKEN;
exports.environment = process.env.NODE_ENV;
exports.logDirectory = process.env.LOG_DIR;
if (!exports.DISCORD_TOKEN) {
    Logger_1.default.error("No 'discord token' provided in .env file.");
}
