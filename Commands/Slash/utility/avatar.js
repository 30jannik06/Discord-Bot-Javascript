const {
    Client,
    ApplicationCommandType,
    CommandInteraction
} = require("discord.js");


module.exports = {
    name: "avatar",
    description: "get your avatar",
    category: "Utility",
    type: ApplicationCommandType.ChatInput,

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        await interaction.reply({
            content: `${interaction.user.displayAvatarURL({
                extension: "png",
                size: 2048,
            })}`,
        });
    },
};