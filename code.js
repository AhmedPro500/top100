const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(` توب في القلب يا ناس يا ولا الكلب	`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});







client.login("NTE5NTg5NDI2MTQyMzgwMDM4.Du2s_A.mMnYqekHaXECsFsOJnOC5LM9BKQ")