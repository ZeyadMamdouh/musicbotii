// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('SOON', {type: 'WATCHING'});
});



client.login(process.env.TOKEN);
