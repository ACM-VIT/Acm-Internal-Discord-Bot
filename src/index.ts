import { Client } from "discord.js";
import { token } from "./config";
import Logger from "./core/Logger";
const client = new Client();
client.on("message", (message) => {
  Logger.info(message.content);
});

client
  .login(token)
  .catch((err) =>
    Logger.error(`Failed to login. Check your discord token:\n ${err} `)
  );
