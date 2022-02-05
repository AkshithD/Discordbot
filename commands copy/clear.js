module.exports = {
    name: 'clear',
    description: "this is the clear command!",
    async execute(message, args){
        if(!(args[0])) return message.reply("enter amount of messages to clear")
        if(isNaN(args[0])) return message.reply("enter a number")

        if((args[0])>100) return message.reply("not more than 100")
        if((args[0])<1)return message.reply("atleast 1 message")

        await message.channel.messages.fetch({limit:args[0]}).then(messags =>{
            message.channel.bulkDelete(messags);
        })
    }
}