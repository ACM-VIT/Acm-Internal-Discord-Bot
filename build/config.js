"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = exports.logDirectory = exports.environment = void 0;
const Logger_1 = __importDefault(require("./core/Logger"));
exports.environment = process.env.NODE_ENV;
exports.logDirectory = process.env.LOG_DIR;
exports.token = process.env.TOKEN;
if (!exports.token)
    Logger_1.default.error("No discord token mentioned in the .env file");
//# sourceMappingURL=config.js.map