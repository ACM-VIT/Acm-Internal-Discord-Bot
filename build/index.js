"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discord_js_1 = __importDefault(require("discord.js"));
const secrets_1 = require("./config/secrets");
const commandHandler_1 = __importDefault(require("./commandHandler"));
const botConfig_1 = __importDefault(require("./config/botConfig"));
const Logger_1 = __importDefault(require("./core/Logger"));
const PORT = process.env.PORT || 5000;
const app = express_1.default();
const client = new discord_js_1.default.Client();
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", (request, response) => {
    response.sendStatus(200);
});
const commandHandler = new commandHandler_1.default(botConfig_1.default.prefix);
//////////////////////////////////////////////////////////////////
//                    DISCORD CLIENT LISTENERS                  //
//////////////////////////////////////////////////////////////////
// Discord Events: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
client.on("ready", () => {
    Logger_1.default.info(`Bot Ready`);
});
client.on("message", (message) => {
    commandHandler.handleMessage(message);
});
client.on("error", (e) => {
    console.error("Discord client error!", e);
});
client
    .login(secrets_1.DISCORD_TOKEN)
    .catch((err) => Logger_1.default.error(`Error in client login: ${err}`));
app.listen(PORT, () => console.log(`Acm Internal Bot reporting for duty on port ${PORT}!`));
