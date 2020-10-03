"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIMEZONES = exports.defaultEmbed = exports.discordToken = exports.logDirectory = exports.environment = void 0;
const discord_js_1 = require("discord.js");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.environment = process.env.NODE_ENV;
exports.logDirectory = process.env.LOG_DIR;
exports.discordToken = process.env.TOKEN;
exports.defaultEmbed = () => {
    return new discord_js_1.MessageEmbed()
        .setColor("#0099ff")
        .setTimestamp()
        .setFooter("Our bot is Open Source, you can find it here: https://github.com/ACM-VIT/Acm-Internal-Discord-Bot");
};
exports.TIMEZONES = [
    { abbr: "PDT", zone: "America/Los_Angeles" },
    { abbr: "AEST", zone: "Australia/Brisbane" },
    { abbr: "EEST", zone: "Asia/Beirut" },
    { abbr: "UTC", zone: "Europe/London" },
    { abbr: "UK", zone: "Europe/London" },
    { abbr: "IST", zone: "Asia/Kolkata" },
];
//# sourceMappingURL=config.js.map