"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandParser = void 0;
/** A user-given command extracted from a message. */
class CommandParser {
    constructor(message, prefix) {
        this.commandPrefix = prefix;
        const splitMessage = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = splitMessage.shift() || "";
        this.parsedCommandName = commandName.toLowerCase();
        this.args = splitMessage;
        this.originalMessage = message;
    }
}
exports.CommandParser = CommandParser;
