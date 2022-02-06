const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

const prefix = '+'

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

client.on("messageCreate", (message) =>{
    if(message.content == "pog"){
        message.reply("eg")
    }
})

client.on ('messageCreate', (message) =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 'clear'){
    client.commands.get('clear').execute(message, args)
}
})

// Initializing the project
require("./handler")(client);

client.login(process.env.TOKEN);
