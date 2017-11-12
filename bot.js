const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

let CommandHandler = require('./command-handler.js');
let commandhandler = new CommandHandler();

bot.on('message', (msg) => {
    commandhandler.handle(msg);
});

bot.login(config.token);
