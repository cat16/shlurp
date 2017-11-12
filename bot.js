const Discord = require("discord.js");
const bot = new Discord.Client();

const handler = require("./handler.js");
const config = require("./config.json");

bot.on('message', (msg) => {
    
});

bot.login(config.token);
