const config = require("./config.json");
const commands = require("./commands.js");

module.exports = function(msg){
    if(msg.startsWith(config.prefix, 1)){
        msg = msg.replace(config.prefix, "")
        for(let cmd in commands){
            if(msg.startsWith(cmd.name)){
                cmd.run(msg);
            }
        }
    }
}