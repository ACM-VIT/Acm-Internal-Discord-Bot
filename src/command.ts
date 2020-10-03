import { Message } from "discord.js";

import commandList, { fallback } from "./commandHandlers";

import { commandPrefix, defaultEmbed } from "./config";

export const commands = async (message: Message) => {
  if (!message.content.startsWith(commandPrefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(commandPrefix.length);
  const command = args.split(/ +/).shift()!.toLowerCase();

  const embed = defaultEmbed();

  const matching = commandList.find(({ triggers }) =>
    triggers.find((trigger) => trigger === command)
  ) || { command: fallback };
  message.channel.send(
    await matching.command(args.slice(command.length + 1), embed, message)
  );
};
