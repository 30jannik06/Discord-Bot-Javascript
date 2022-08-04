const {
    Client
} = require("discord.js");
const {
    readdirSync
} = require("fs");
const {
    clientId,
    guildId
} = require("../settings/config.json")
const {
    log,
    error,
    warn
} = require("../helper/logHelper")

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
    try {
        let allCommands = [];
        readdirSync("./Commands/Slash").forEach((dir) => {
            const commands = readdirSync(`./Commands/Slash/${dir}`).filter((f) => f.endsWith(".js"));

            for (const cmd of commands) {
                const command = require(`../Commands/Slash/${dir}/${cmd}`);
                if (command.name) {
                    client.scommands.set(command.name, command)
                    allCommands.push(command)
                } else {
                    error(`${cmd} is not ready`);
                }
            }
        });
        log(`${client.scommands.size} Slash Commands Loaded`);

        client.on('ready', () => {
            //client.application.commands.set(allCommands);
            client.guilds.cache.get(guildId).commands.set(allCommands)
        });
    } catch (error) {
        error(error)
    }
};