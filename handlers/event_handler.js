const {
    Client
} = require("discord.js");
const {
    readdirSync
} = require("fs");
const {
    log,
    error,
    warn,
    evnt
} = require("../helper/logHelper")

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
    let eventCount = 0;
    readdirSync("./events")
        .filter((f) => f.endsWith(".js"))
        .forEach((event) => {
            require(`../events/${event}`);
            eventCount++;
            evnt(`${event} Event Loaded`);
        });

    //log(`${eventCount} event loaded`);
};