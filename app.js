require('dotenv').config()
const tmi = require('tmi.js')
var prefix = "!"

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ process.env.CHANNEL_NAME ]
});

client.connect().catch(console.error);
client.on('chat', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}

	//cmd handler
	const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase(); 
	try {
        let commandFile = require(`./commands/${cmd}.js`)
    	commandFile.run(client, message, args, tags, channel, self)
    } catch (err) {
        return;
	}
});