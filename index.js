const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection
} = require("discord.js");
const { token } = require("./settings/config.json")
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember,
    ],
});

client.scommands = new Collection();
client.mcommands = new Collection();


module.exports = client;



//handler
["event_handler", "slash_handler", "cmd_handler"].forEach((file) => {
    require(`./handlers/${file}`)(client);
});

client.login(token);