const Discord = require("discord.js")

//const config = require('./config.json')

const client= new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if(message.content == "pog"){
        message.reply("eg")
    }
})

client.on("guildMemberAdd", (member) => {
    send(`<@${member.id}> Welcome to the server`)

})




client.login(process.env.TOKEN)
