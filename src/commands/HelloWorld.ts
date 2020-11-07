import { Message } from "discord.js";
import Logger from "../core/Logger";
import Command from "../core/command";

export default class HelloWorld extends Command {
  constructor(name = "hello-world", description = "The Classic Hello World!") {
    super(name, description);
  }
  execute(message: Message, args: string[]) {
    message.channel.send("Hello World!");
  }
}