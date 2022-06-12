//const chalk = require("chalk")
const Box = require("cli-box")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setPresence({activities: [{name: 'Twitch', type: 'STREAMING', url: 'https://www.twitch.tv/Jannik_so'}], status: 'online'})
        console.clear()
        const ClientBox = new Box({
            w: Math.floor(client.user.tag.length + 27 ),
            h: 7,
            stringify: false,
            marks: {
              nw: '╭',
              n: '─',
              ne: '╮',
              e: '│',
              se: '╯',
              s: '─',
              sw: '╰',
              w: '│'
            },
            hAlign: 'left',
          }, `C L I E N T   I N F O R M A T I O N

Client Details    ::    ${client.user.tag}
Guilds Count      ::    ${client.guilds.cache.size}
User Count        ::    ${client.users.cache.size}
NodeJS Version    ::    ${process.version}
`).stringify()

        // console.log(chalk.bold.greenBright(ClientBox))
        // console.log(chalk.bold.blueBright(CommandsBox))
        console.log(ClientBox)
	},
};