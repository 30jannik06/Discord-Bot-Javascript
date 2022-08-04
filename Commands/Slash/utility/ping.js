const {
    Client,
    ApplicationCommandType,
    CommandInteraction,
    PermissionFlagsBits
} = require("discord.js");


module.exports = {
    name: "ping",
    description: "get ping of bot",
    category: "Utility",
    type: ApplicationCommandType.ChatInput,
    userPermissions: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        await interaction.reply({
            content: "Pong!"
        })
    },
};