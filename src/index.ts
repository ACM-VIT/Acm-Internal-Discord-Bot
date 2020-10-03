import Logger from "./core/Logger";
import { client } from "./client";
import { discordToken } from "./config";

import { timezone } from "./timezone";

client.once("ready", () => {
  Logger.info("Acm Internal Bot Ready For Duty");
});

client.on("message", (message) => timezone(message));

client
  .login(discordToken)
  .catch((err) =>
    Logger.error(`Failed to login. Check your discord token:\n ${err} `)
  );
