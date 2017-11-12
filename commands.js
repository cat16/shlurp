const { RichEmbed } = require('discord.js');
const Command = require('./Command.js');

module.exports = [

    new Command({
        name: 'test',
        description: 'just testing to see if the bot will work on the most basic level',
        run: (msg) => {
            console.log(msg.content);
        }
    }),
    new Command({
        name: 'ttt',
        description: 'Lets you play a game of tic tac toe against someone',
        run: (msg) => {
            const mentions = msg.mentions.members.array();
            if (mentions.length > 0) {
                const p1 = msg.author;
                const p2 = mentions[0].user;

                let currentPlayer = p1;

                let embed = new RichEmbed()
                    .setTitle('Tic Tac Toe')
                    .setDescription(`${p1.username} vs ${p2.username}!` +
                    '```\n' +
                    '┌───┬───┬───┐\n' +
                    '│   │   │   │\n' +
                    '├───┼───┼───┤\n' +
                    '│   │   │   │\n' +
                    '├───┼───┼───┤\n' +
                    '│   │   │   │\n' +
                    '└───┴───┴───┘\n' +
                    '```'
                    )
                    .addField(
                    'status',
                    `${currentPlayer.username}'s turn`
                    )
                msg.channel.send({ embed });
            } else {
                msg.channel.send('You must specify another person to play with!');
            }
        }
    })

]