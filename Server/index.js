const Discord = require('discord.js');
const conf = require('../Config/config');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
    if(msg.content === '/명령어') {
        
    }

    if(msg.content === 'ping') {
        msg.reply('pong **`' + Math.floor(client.ws.ping) + 'ms`**');
    }
});

client.login(conf.token);