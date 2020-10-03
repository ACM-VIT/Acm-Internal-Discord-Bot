import Logger from "./core/Logger";
import { client } from "./client";
import { discordToken } from "./config";

import { timezone } from "./timezone";
import { TextChannel } from "discord.js";

client.once("ready", () => {
  Logger.info("Acm Internal Bot Ready For Duty");
});

client.on("guildMemberAdd", (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  (channel as TextChannel).send(`Welcome to the server, ${member}`);
});

client.on("message", (message) => timezone(message));

client
  .login(discordToken)
  .catch((err) =>
    Logger.error(`Failed to login. Check your discord token:\n ${err} `)
  );
