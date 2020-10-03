import { MessageEmbed } from "discord.js";
import { commandPrefix } from "../config";

export const fallback = async (arg: string, embed: MessageEmbed) => {
  return embed
    .setTitle("ERROR: ooops...command not found")
    .setDescription(`Try using the ${commandPrefix}help command.`);
};
