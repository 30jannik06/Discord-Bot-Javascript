const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES], allowedMentions: { parse: ['users', 'roles',], repliedUser: true }, partials: ['CHANNEL'] })

client.on("ready", () => {
    console.clear()
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

client.on("channelDelete", function(channel) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Channel deleted")
    .setDescription("")
    .addFields(
        { name: "Channel name", value: `<#${channel.id}>`, inline: true },
        { name: "Channel ID", value: `${channel.id}`, inline: true }
        )
    .setColor("#ff0000")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("channelUpdate", function(oldChannel, newChannel) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Channel updated")
    .setDescription("")
    .addFields(
        { name: "Old channel name", value: `\`\`\`${oldChannel.name}\`\`\``, inline: false },
        { name: "New channel name", value: `\`\`\`${newChannel.name}\`\`\``, inline: false },
        { name: "Channel ID", value: `\`\`\`${oldChannel.id}\`\`\``, inline: false },
        )
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("channelPinsUpdate", function(channel, time) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Channel pins updated")
    .setDescription("")
    .addFields(
        { name: "Channel name", value: `<#${channel.id}>`, inline: true },
        { name: "Channel ID", value: `${channel.id}`, inline: true },
        { name: "Time", value: `${time}`, inline: true }
        )
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("emojiCreate", function(emoji) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Emoji created")
    .setDescription("")
    .addFields(
        { name: "Emoji name", value: `${emoji.name}`, inline: true },
        { name: "Emoji ID", value: `${emoji.id}`, inline: true },
        { name: "Emoji URL", value: `\`\`\`${emoji.url}\`\`\``, inline: true }
        )
    .setImage(`${emoji.url}`)
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("emojiDelete", function(emoji) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Emoji deleted")
    .setDescription("")
    .addFields(
        { name: "Emoji name", value: `${emoji.name}`, inline: true },
        { name: "Emoji ID", value: `${emoji.id}`, inline: true },
        { name: "Emoji URL", value: `\`\`\`${emoji.url}\`\`\``, inline: true }
        )
    .setImage(`${emoji.url}`)
    .setColor("#ff0000")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("emojiUpdate", function(oldEmoji, newEmoji) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Emoji updated")
    .setDescription("")
    .addFields(
        { name: "Old emoji name", value: `${oldEmoji.name}`, inline: true },
        { name: "New emoji name", value: `${newEmoji.name}`, inline: true },
        { name: "Emoji ID", value: `${oldEmoji.id}`, inline: true },
        { name: "Emoji URL", value: `\`\`\`${oldEmoji.url}\`\`\``, inline: true }
        )
    .setImage(`${oldEmoji.url}`)
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("guildUpdate", function(oldGuild, newGuild) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Guild updated")
    .setDescription("")
    .addFields(
        { name: "Old guild name", value: `${oldGuild.name}`, inline: true },
        { name: "New guild name", value: `${newGuild.name}`, inline: true },
        { name: "Guild ID", value: `${oldGuild.id}`, inline: true },
        { name: "Guild icon URL", value: `\`\`\`${oldGuild.iconURL()}\`\`\``, inline: true }
        )
    .setImage(`${oldGuild.iconURL()}`)
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("error", function(error) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Error")
    .setDescription("")
    .addFields(
        { name: "Error", value: `${error}`, inline: true }
        )
    .setColor("#ff0000")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("roleCreate", function(role) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Role created")
    .setDescription("")
    .addFields(
        { name: "Role name", value: `${role.name}`, inline: true },
        { name: "Role ID", value: `${role.id}`, inline: true },
        { name: "Role color", value: `${role.hexColor}`, inline: true }
        )
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("roleDelete", function(role) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Role deleted")
    .setDescription("")
    .addFields(
        { name: "Role name", value: `${role.name}`, inline: true },
        { name: "Role ID", value: `${role.id}`, inline: true },
        { name: "Role color", value: `${role.hexColor}`, inline: true }
        )
    .setColor("#ff0000")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})

client.on("roleUpdate", function(oldRole, newRole) {
    const clearLog = client.channels.cache.find(ch => ch.id === config.LOGCHANNEL);
    const embed = new Discord.MessageEmbed()
    .setTitle("Role updated")
    .setDescription("")
    .addFields(
        { name: "Old role name", value: `${oldRole.name}`, inline: false },
        { name: "New role name", value: `${newRole.name}`, inline: false },
        { name: "Role ID", value: `${oldRole.id}`, inline: false },
        { name: "Role color", value: `${oldRole.hexColor}`, inline: false }
        )
    .setColor("#00ff00")
    .setTimestamp()
    clearLog.send({embeds: [embed]})
})


client.login(config.TOKEN)