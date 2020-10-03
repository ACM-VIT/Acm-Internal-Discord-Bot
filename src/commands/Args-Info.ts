import { Message } from "discord.js";
import Command from "../core/command";

export default class argsInfo extends Command {
  constructor(
    name = "args-info",
    description = "Information about the arguments provided",
    hasArgs = true,
    usage = "<arg 1> <arg2> etc.."
  ) {
    super(name, description, hasArgs, usage);
  }
  execute(message: Message, args: string[]) {
    if (args[0] === "foo") {
      return message.channel.send("bar");
    }

    message.channel.send(
      `Arguments: ${args}\nArguments length: ${args.length}`
    );
  }
}
