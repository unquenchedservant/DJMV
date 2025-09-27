const { Client, Events, GatewayIntentBits } = require('discord.js');

const dotenv = require('dotenv');

dotenv.config();

const token = process.env.DJMV_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, readyClient => {
    console.log(`GOD ALWAYS! Logged in as ${readyClient.user.tag}`);
});

const phrases = ['GOD ALWAYS!', 'INDIE TRIBE SAVES LIVES','TALK TO ME NICE']
client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (Math.floor(Math.random() * 116) + 1 == 16 || message.mentions.has(client.user.id)){
        message.reply(phrases[Math.floor(Math.random() * 3)]);
    }
});
client.login(token);
