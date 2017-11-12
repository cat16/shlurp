const Discord = require("discord.js");
const bot = new Discord.Client();

const handle = require("./handle.js");
const config = require("./config.json");

bot.on('message', (msg) => {
    handle(msg);
});

bot.login(config.token);
