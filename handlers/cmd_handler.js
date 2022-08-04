const { Client } = require("discord.js");
const { readdirSync } = require("fs");
const { log, error, warn, cmd} = require("../helper/logHelper")

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
    try {
        let allCommands = [];
        readdirSync("./Commands/Message").forEach((dir) => {
            const commands = readdirSync(`./Commands/Message/${dir}`).filter((f) => f.endsWith(".js"));

            for (const cmd of commands) {
                const command = require(`../Commands/Message/${dir}/${cmd}`);
                if (command.name) {
                    client.mcommands.set(command.name, command)
                } else {
                    error(`${cmd} is not ready`);
                }
            }
        });
        log(`${client.mcommands.size} Message Commands Loaded`);
    } catch (error) {
        error(error)
    }
};