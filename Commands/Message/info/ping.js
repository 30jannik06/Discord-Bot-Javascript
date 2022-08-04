const {
    Client,
    Message,
    PermissionFlagsBits
} = require("discord.js");

module.exports = {
    name: "ping",
    description: "get ping of bot",
    category: "Utility",
    userPermissions: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    /**
     * 
     * @param {Client} client |
     * @param {Message} message |
     */
    run: async (client, message) => {
        message.reply({
            content: "Pong",
        });
    },
};