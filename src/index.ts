require("dotenv").config();
import { discordToken, prefix } from "./config";
import { Client, Collection } from "discord.js";
import Logger from "./core/Logger";
import { Bot } from "./types/types";
import commands from "./commands";

process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
});

export const bot: Bot = new Client();
bot.commands = new Collection();

bot.on("ready", () => {
  Logger.info(` ${bot.user.tag} reporting for duty !`);
});

try {
  for (const command of commands)
    bot.commands.set(command.name, command.convertToObject());
} catch (err) {
  Logger.info(err);
}

bot.on("message", (message: any) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    bot.commands.get(commandName) ||
    bot.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (!!command.hasArgs && args.length == 0) {
    let reply = `You didn't provide any arguments, ${message.author}!`;
    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

bot.login(discordToken).catch((err) => Logger.error(err));
