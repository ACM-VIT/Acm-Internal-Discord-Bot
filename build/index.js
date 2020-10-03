"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
const Logger_1 = __importDefault(require("./core/Logger"));
const client = new discord_js_1.Client();
client.on("message", (message) => {
    Logger_1.default.info(message.content);
});
client
    .login(config_1.token)
    .catch((err) => Logger_1.default.error(`Failed to login. Check your discord token:\n ${err} `));
//# sourceMappingURL=index.js.map