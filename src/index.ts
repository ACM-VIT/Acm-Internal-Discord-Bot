import express, { Request, Response } from "express";
import Discord, { Message } from "discord.js";
import { DISCORD_TOKEN } from "./config/secrets";
import CommandHandler from "./commandHandler";
import config from "./config/botConfig";
import Logger from "./core/Logger";

const PORT = process.env.PORT || 5000;

const app = express();
const client = new Discord.Client();

app.use(express.urlencoded({ extended: true }));

app.use("/", (request: Request, response: Response) => {
  response.sendStatus(200);
});

const commandHandler = new CommandHandler(config.prefix);

//////////////////////////////////////////////////////////////////
//                    DISCORD CLIENT LISTENERS                  //
//////////////////////////////////////////////////////////////////
// Discord Events: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate

client.on("ready", () => {
  Logger.info(`Bot Ready`);
});
client.on("message", (message: Message) => {
  commandHandler.handleMessage(message);
});
client.on("error", (e) => {
  console.error("Discord client error!", e);
});

client
  .login(DISCORD_TOKEN)
  .catch((err) => Logger.error(`Error in client login: ${err}`));
app.listen(PORT, () =>
  console.log(`Acm Internal Bot reporting for duty on port ${PORT}!`)
);
