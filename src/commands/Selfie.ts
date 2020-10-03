import { Message } from "discord.js";
import Command from "../core/command";
import { bot } from "../index";

function getUserFromMention(mention: string): any {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    return bot.users.cache.get(mention);
  }
}

export default class Selfie extends Command {
  constructor(
    name = "selfie",
    description = "returns your avatar picture",
    aliases = ["take-photo"]
  ) {
    super(name, description, null, null, aliases);
  }
  execute(message: Message, args: string[]) {
    if (args[0]) {
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.reply(
          "Please use a proper mention if you want to see someone else's avatar."
        );
      }

      return message.channel.send(
        `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`
      );
    }

    return message.channel.send(
      `${
        message.author.username
      }, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`
    );
  }
}
