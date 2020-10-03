import { Client, Collection } from "discord.js";
import { CommandBluePrint } from "../core/command";

export interface Bot extends Client {
  commands?: Collection<string, CommandBluePrint>;
}
