"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCommand = void 0;
class TimeCommand {
    constructor() {
        this.commandNames = ["time"];
    }
    help(commandPrefix) {
        return `Use ${commandPrefix}time to current time.`;
    }
    async run(message) {
        const now = new Date();
        await message.reply(`${now.getHours()} : ${now.getMinutes()}`);
    }
}
exports.TimeCommand = TimeCommand;
