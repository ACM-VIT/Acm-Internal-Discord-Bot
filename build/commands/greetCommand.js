"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
class GreetCommand {
    constructor() {
        this.commandNames = ["greet", "hello"];
    }
    help(commandPrefix) {
        return `Use ${commandPrefix}greet to get a greeting.`;
    }
    async run(message) {
        await message.reply("hello, User!");
    }
}
exports.GreetCommand = GreetCommand;
