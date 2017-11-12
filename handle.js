const { Message } = require('discord.js');

const config = require("./config.json");
const commands = require("./commands.js");

/**
 * @param {Message} msg
 */
let handle = function(msg){
    if(msg.content.startsWith(config.prefix)){
        let content = msg.content.substring(config.prefix.length);
        for(let cmd of commands){
            if(content.startsWith(cmd.name)){
                cmd.run(msg);
            }
        }
    }
}
module.exports = handle;