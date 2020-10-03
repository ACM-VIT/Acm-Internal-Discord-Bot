import { Message } from "discord.js";

/*
Usage is basically the correct arguments for the command to work.
If the user doesnt give the arguments the usage string shows the correct arguments


args is a boolean value which is set to true if the command accpets argunments
*/

type executeFunc = (message: Message, args: string[]) => void;

export interface CommandBluePrint {
  name: string;
  description: string;
  execute: executeFunc;
  hasArgs?: boolean;
  usage?: string;
  aliases?: string[];
}
export default abstract class Command {
  constructor(
    public name: string,
    public description: string,
    public hasArgs?: boolean,
    public usage?: string,
    public aliases?: string[]
  ) {}
  public execute(message: Message, args: string[]): void {}
  public convertToObject(): CommandBluePrint {
    const res = {
      name: this.name,
      description: this.description,
      hasArgs: this.hasArgs || null,
      usage: this.usage || null,
      aliases: this.aliases || null,
      execute: this.execute,
    } as CommandBluePrint;
    return res;
  }
  ["constructor"]: typeof Command;
}
