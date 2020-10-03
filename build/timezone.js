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
exports.timezone = void 0;
const moment = __importStar(require("moment-timezone"));
const config_1 = require("./config");
/**
 * Runs for every message
 * and checks for time and zone "1pm UTC" or "1:30pm UTC"
 * and replies with other options from the config
 *
 * @param message
 */
exports.timezone = async (message) => {
    if (message.author.bot) {
        return;
    }
    const match = message.content.match(/([\d]{1,2})([:\d]{3})?[\s]?(pm|am|AM|PM)?\b[\s]([a-zA-Z]{2,3})?\b/);
    if (match) {
        const [mentioned, hour, minutes, dayNight, zone] = match;
        const proposedZone = config_1.TIMEZONES.find((item) => item.abbr === zone.toUpperCase());
        if (proposedZone) {
            const initial = minutes
                ? moment.tz(`${hour}${minutes} ${dayNight}`, "h:mm A", proposedZone.zone)
                : moment.tz(`${hour}${minutes} ${dayNight}`, "h A", proposedZone.zone);
            const embed = config_1.defaultEmbed().setTitle("Popular timezones");
            const availableZones = config_1.TIMEZONES.filter((item) => item.abbr !== zone);
            embed.addField(mentioned, proposedZone.zone);
            availableZones.forEach((item) => embed.addField(`${item.zone} (${item.abbr})`, initial.tz(item.zone).format("h:mma z")));
            return message.channel.send(embed);
        }
    }
    return;
};
//# sourceMappingURL=timezone.js.map