const { Message } = require('discord.js');

const config = require("./config.json");
const commands = require("./commands.js");

/**
 * @param {string} source 
 * @return {boolean}
 */
const isDirectory = source => lstatSync(source).isDirectory();
/**
 * @param {string} source 
 * @return {boolean}
 */
const isFile = source => lstatSync(source).isFile();

/**
 * gets all folders in a directory
 * @param {string} source 
 * @return {string[]}
 */
let getDirectories = source => {
    if(source.startsWith('.')) source = source.substring(1);
    let dirs = readdirSync(__dirname + source).map(name => join(__dirname + source, name)).filter(isDirectory);
    for (let dir in dirs) {
        dirs[dir] = dirs[dir].slice(__dirname.length + source.length + 1);
    }
    return dirs;
}
/**
 * gets all files in a directory
 * @param {string} source 
 * @return {string[]}
 */
let getFiles = source => {
    if(source.startsWith('.')) source = source.substring(1);
    let files = readdirSync(__dirname + source).map(name => join(__dirname + source, name)).filter(isFile);
    for (let file in files) {
        files[file] = files[file].slice(__dirname.length + source.length + 1);
    }
    return files;
}

/**
 * @param {Message} msg
 */
let handle = function(msg){
    if(msg.content.startsWith(config.prefix)){
        let content = msg.content.substring(config.prefix.length);
        for(let cmd of getFiles("./commands")){
            console.log(cmd)
            if(content.startsWith(cmd)){
                cmd.run(msg);
            }
        }
    }
}
module.exports = handle;