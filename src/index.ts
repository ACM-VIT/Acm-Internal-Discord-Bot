import Discord from "discord.js"; // imports the discord library
import { readFile } from "fs";
import { promisify } from "util";
import path from "path";
import Logger from "./core/Logger";
import { discordBotToken } from "./config";

const client = new Discord.Client();

client.once("ready", () => {
  Logger.info("mr. bot ready to rock and roll !");
});

client
  .login(discordBotToken)
  .catch((err) =>
    Logger.error(
      `this token is invalid. the token you gave :${discordBotToken}`
    )
  );
