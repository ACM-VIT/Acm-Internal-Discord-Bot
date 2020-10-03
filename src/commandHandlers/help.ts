import { MessageEmbed } from "discord.js";
import { commandPrefix } from "../config";

import commandList from "./index";

export const command = async (arg: string, embed: MessageEmbed) => {
  embed.setTitle("Help commands").setDescription("Lists the command available");

  commandList.forEach((commandItem) =>
    embed.addField(
      `${commandPrefix}${commandItem.triggers[0]}`,
      `${commandItem.description}\nUsage: ${commandPrefix}${commandItem.usage}`,
      false
    )
  );

  return embed;
};

export const description = "Lists available commands";

export const triggers = ["help"];

export const usage = triggers[0];
