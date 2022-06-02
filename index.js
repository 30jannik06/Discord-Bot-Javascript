const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES], allowedMentions: { parse: ['users', 'roles',], repliedUser: true }, partials: ['CHANNEL'] })

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    // client.user.setActivity('Spotify', { type: 'LISTENING' })
    client.user.setPresence({activities: [{name: 'Twitch', type: 'STREAMING', url: 'https://www.twitch.tv/Jannik_so'}], status: 'online'})

})

client.on("messageCreate", async (message) => {
    if (message.author.bot) return
    if (message.content.startsWith(config.PREFIX)) {
        const args = message.content.slice(config.PREFIX.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        if (command === "embed") {
            await message.delete(message)
            const clearLog = client.channels.cache.find(ch => ch.name === "dev");
            const embed = new Discord.MessageEmbed()
            .setTitle("Channel created")
            .setDescription(`${clearLog.name} was created`)
            .addFields({ name: "Channel name", value: `${clearLog.name}`, inline: true }, { name: "Channel ID", value: `${clearLog.id}`, inline: true })
            .setColor("#00ff00")
            .setTimestamp()
            await clearLog.send({embeds: [embed]})
        }
    }
})

client.on("channelCreate", function(channel) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Channel created")
    .setDescription("")
    .addFields(
        { name: "Channel name", value: `<#${channel.id}>`, inline: true }, 
        { name: "Channel ID", value: `${channel.id}`, inline: true }
        )
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.login(config.TOKEN)