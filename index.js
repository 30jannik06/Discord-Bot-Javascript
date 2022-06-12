const fs = require('node:fs')
const path = require('node:path')
const Discord = require("discord.js")
const c = require("./helper/logHelper.js")

const config = require("./config.json")
const color = require("./helper/colors.json")

// const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES], allowedMentions: { parse: ['users', 'roles',], repliedUser: true }, partials: ['CHANNEL'] })
const client = new Discord.Client({ intents: 131071})


const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', interaction => {
	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
});

client.login(config.TOKEN)