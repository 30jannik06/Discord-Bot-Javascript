const {
    Client,
    Message,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = {
    name: "btn",
    description: "Test Button",
    category: "info",
    userPermissions: [],
    botPermissions: [],

    /**
     * 
     * @param {Client} client |
     * @param {Message} message |
     */
    run: async (client, message) => {
        const raw = new ActionRowBuilder().addComponents([
            new ButtonBuilder()
                .setCustomId("btn-1")
                .setStyle(ButtonStyle.Primary)
                .setLabel("Primary"),
            new ButtonBuilder()
                .setCustomId("btn-2")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("Secondary"),
            new ButtonBuilder()
                .setCustomId("btn-3")
                .setStyle(ButtonStyle.Danger)
                .setLabel("Danger"),
            new ButtonBuilder()
                .setCustomId("btn-4")
                .setStyle(ButtonStyle.Success)
                .setLabel("Success"),
            new ButtonBuilder()
                .setURL("https://youtube.com")
                .setStyle(ButtonStyle.Link)
                .setLabel("Link"),
        ])

        await message.reply({
            content: `Buttons`,
            components: [raw],
        });
    },
};