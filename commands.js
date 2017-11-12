module.exports = [

    new Command(
        "test",
        "just testing to see if the bot will work on the most basic level",
        (msg) => {
            console.log(msg.content);
        }
    )

]