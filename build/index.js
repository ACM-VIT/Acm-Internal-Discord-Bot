"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./core/Logger"));
const client_1 = require("./client");
const config_1 = require("./config");
const timezone_1 = require("./timezone");
client_1.client.once("ready", () => {
    Logger_1.default.info("Acm Internal Bot Ready For Duty");
});
client_1.client.on("guildMemberAdd", (member) => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find((ch) => ch.name === "member-log");
    // Do nothing if the channel wasn't found on this server
    if (!channel)
        return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});
client_1.client.on("message", (message) => timezone_1.timezone(message));
client_1.client
    .login(config_1.discordToken)
    .catch((err) => Logger_1.default.error(`Failed to login. Check your discord token:\n ${err} `));
//# sourceMappingURL=index.js.map