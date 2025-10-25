const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

function log(message) { 
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}`;
    console.log(logMessage);
    
    fs.appendFile(`/mnt/logs/djmv.log`, logMessage, (err) => {
        if (err) console.error('Failed to write to log file:', err);
    });
}
const token = process.env.DJMV_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, readyClient => {
    console.log(`GOD ALWAYS! Logged in as ${readyClient.user.tag}`);
});

const phrases = ['GOD ALWAYS!', 'INDIE TRIBE SAVES LIVES','TALK TO ME NICE']
client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (Math.floor(Math.random() * 1160) + 1 == 16 || message.mentions.has(client.user.id)){
        const msg = phrases[Math.floor(Math.random() * 3)];
        message.reply(msg)
        .then(() => log(msg))
        .catch(err => log(`ERR ${err}`));
    }
});
client.login(token);
