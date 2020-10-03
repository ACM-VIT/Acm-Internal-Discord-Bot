"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
require("dotenv").config();
const config_1 = require("./config");
const discord_js_1 = require("discord.js");
const Logger_1 = __importDefault(require("./core/Logger"));
const commands_1 = __importDefault(require("./commands"));
process.on("unhandledRejection", (error) => {
    console.error("Unhandled promise rejection:", error);
});
exports.bot = new discord_js_1.Client();
exports.bot.commands = new discord_js_1.Collection();
exports.bot.on("ready", () => {
    Logger_1.default.info(` ${exports.bot.user.tag} reporting for duty !`);
});
try {
    for (const command of commands_1.default)
        exports.bot.commands.set(command.name, command.convertToObject());
}
catch (err) {
    Logger_1.default.info(err);
}
exports.bot.on("message", (message) => {
    if (!message.content.startsWith(config_1.prefix) || message.author.bot)
        return;
    const args = message.content.slice(config_1.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = exports.bot.commands.get(commandName) ||
        exports.bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command)
        return;
    if (!!command.hasArgs && args.length == 0) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${config_1.prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply("there was an error trying to execute that command!");
    }
});
exports.bot.login(config_1.discordToken).catch((err) => Logger_1.default.error(err));
//# sourceMappingURL=index.js.map