const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg.author.username)

  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'uwu') {
    msg.reply(msg.author.id);
  }

  if (msg.content === 'avatar') {
    msg.reply(msg.author.avatarURL());
  }

  console.log(msg.author.id)
});

client.login('');
