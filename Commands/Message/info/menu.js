const {
    Client,
    Message,
    ActionRowBuilder,
    SelectMenuBuilder,
    EmbedBuilder,
    Colors
} = require("discord.js");

module.exports = {
    name: "menu",
    description: "Test Menu",
    category: "info",
    userPermissions: [],
    botPermissions: [],

    /**
     * 
     * @param {Client} client |
     * @param {Message} message |
     */
    run: async (client, message) => {
        const menurow = new ActionRowBuilder().addComponents([
            new SelectMenuBuilder()
                .setCustomId(`menu-1`)
                .setPlaceholder("Click to see options")
                .addOptions([
                    {
                        label: "Option 1",
                        description: "description of label1",
                        value: "opt-1",
                        emoji: "✅",
                    },
                    {
                        label: "Option 2",
                        description: "description of label2",
                        value: "opt-2",
                        emoji: "❎",
                    },
                ]),
        ]);

        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor(Colors.Blurple)
                    .setDescription("Embed for select menu"),
            ],
            components: [menurow]
        })
    },
};