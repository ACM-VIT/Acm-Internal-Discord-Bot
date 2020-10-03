import { MessageEmbed } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

export const environment = process.env.NODE_ENV;
export const logDirectory = process.env.LOG_DIR;

export const discordToken = process.env.TOKEN;

export const defaultEmbed = () => {
  return new MessageEmbed()
    .setColor("#0099ff")
    .setTimestamp()
    .setFooter(
      "Our bot is Open Source, you can find it here: https://github.com/ACM-VIT/Acm-Internal-Discord-Bot"
    );
};

export const TIMEZONES = [
  { abbr: "PDT", zone: "America/Los_Angeles" },
  { abbr: "AEST", zone: "Australia/Brisbane" },
  { abbr: "EEST", zone: "Asia/Beirut" },
  { abbr: "UTC", zone: "Europe/London" },
  { abbr: "UK", zone: "Europe/London" },
  { abbr: "IST", zone: "Asia/Kolkata" },
];
