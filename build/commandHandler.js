"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("./commands");
const commandParser_1 = require("./models/commandParser");
class CommandHandler {
    constructor(prefix) {
        const commandClasses = [
            commands_1.GreetCommand,
            commands_1.TimeCommand
        ];
        this.commands = commandClasses.map(commandClass => new commandClass());
        this.prefix = prefix;
    }
    /** Executes user commands contained in a message if appropriate. */
    async handleMessage(message) {
        if (message.author.bot || !this.isCommand(message)) {
            return;
        }
        message.reply(`Hive Greeter recieved '${this.echoMessage(message)}' from ${message.author.tag}`);
        const commandParser = new commandParser_1.CommandParser(message, this.prefix);
        const matchedCommand = this.commands.find(command => command.commandNames.includes(commandParser.parsedCommandName));
        if (!matchedCommand) {
            await message.reply(`I don't recognize that command. Try !help.`);
        }
        else {
            await matchedCommand.run(message).catch(error => {
                message.reply(`'${this.echoMessage(message)}' failed because of ${error}`);
            });
        }
    }
    /** Sends back the message content after removing the prefix. */
    echoMessage(message) {
        return message.content.replace(this.prefix, "").trim();
    }
    /** Determines whether or not a message is a user command. */
    isCommand(message) {
        return message.content.startsWith(this.prefix);
    }
}
exports.default = CommandHandler;
