"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js")); // imports the discord library
const Logger_1 = __importDefault(require("./core/Logger"));
const config_1 = require("./config");
const client = new discord_js_1.default.Client();
client.once("ready", () => {
    Logger_1.default.info("mr. bot ready to rock and roll !");
});
client
    .login(config_1.discordBotToken)
    .catch((err) => Logger_1.default.error(`this token is invalid. the token you gave :${config_1.discordBotToken}`));
//# sourceMappingURL=index.js.map