const { Message } = require('discord.js');

class Command {

    /**
	 * @typedef {Object} CommandOptions
     * @property {string} name
     * @property {function(Message)} run
     * @property {string} [description]
	 */

    /**
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.desc = options.desc || "no description was provided";
        this.run = options.run;
    }
}

module.exports = Command;