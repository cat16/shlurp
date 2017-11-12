const Command = require('./Command.js');

module.exports = [

    new Command({
        name: "test",
        description: "just testing to see if the bot will work on the most basic level",
        run: (msg) => {
            console.log(msg.content);
        }
    })

]