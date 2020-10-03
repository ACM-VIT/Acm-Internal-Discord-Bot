import { Message } from "discord.js";
import Command from "../core/command";

export default class Ping extends Command {
  constructor(name = "ping", description = "Ping!") {
    super(name, description);
  }
  execute(message: Message, args: string[]) {
    message.channel.send("Pong.");
  }
}
