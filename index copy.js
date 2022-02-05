const Discord = require("discord.js")



const client= new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

const prefix = '+'

const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if(message.content == "pog"){
        message.reply("eg")
    }
})

client.on("guildMemberAdd", (member) => {
    message.channel.send(`<@${member.id}> Welcome to the server`)

})

client.on ('messageCreate', (message) =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
        
    }

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args)

    }
})





client.login(process.env.TOKEN)