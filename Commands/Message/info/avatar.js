const { Client, Message } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "get your Avatar",
    category: "Utility",

    /**
     * 
     * @param {Client} client |
     * @param {Message} message |
     */
    run: async (client, message) => {
        await message.reply({
            content: `${message.author.displayAvatarURL({
                extension: "png",
                size: 2048,
            })}`,
        });
    },
};