const { Message } = require('discord.js');

const config = require("./config.json");
const { getFiles } = require('./tools.js');
const Command = require('./Command.js');

class CommandHandler {

    constructor(){
        /**@type {Command[]} */
        this.commands = [];
        for(let file of getFiles('./commands')){
            if(file.endsWith('.js')){
                let cmd = require(`./commands/${file}`);
                this.commands.push(cmd);
            }
        }
    }

    /**
     * @param {Message} msg
     */
    handle(msg) {
        if (msg.content.startsWith(config.prefix)) {
            let content = msg.content.substring(config.prefix.length);
            for (let cmd of this.commands) {
                if (content.startsWith(cmd.name)) {
                    cmd.run(msg);
                }
            }
        }
    }
}
module.exports = CommandHandler;