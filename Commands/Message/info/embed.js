const {
    Client,
    Message,
    EmbedBuilder,
    Colors,
} = require("discord.js");

module.exports = {
    name: "embed",
    description: "created a embed",
    category: "Utility",
    /*
    userPermissions: [],
    botPermissions: [],
    */

    /**
     * 
     * @param {Client} client |
     * @param {Message} message |
     */
    run: async (client, message) => {
        const myEmbed = new EmbedBuilder()
            .setColor(Colors.Red)
            .setTitle("Embed Title")
            .setURL("https://discord.gg/indexgw")
            .setAuthor({
                name: "Author Title",
                iconURL: "https://i.imgur.com/AfFp7pu.png",
                url: "https://discord.js.org",
            })
            .setDescription("This is the fucking Descriptioon of this Shitty Embed")
            message.reply({
                embeds: [myEmbed]
            });
    },
};


//https://www.youtube.com/watch?v=NErJqzNjeAk&list=PLWYS_pGi-l5dnSyKIH9S57tqdE0xM51wy&index=6