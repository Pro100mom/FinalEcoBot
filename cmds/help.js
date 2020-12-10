const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   


    let embed = new Discord.MessageEmbed()
    .setTitle("Все команды")
    .setDescription("Команды писать со знаком ! | !help")
    .addField("Экономика", "`!work` `!beg` `!pay` `!balance` `!profile` `!withdraw` `!deposit` `!daily` `!weekly` `!store` `!buy` `!sell`")
    .addField("Игры", "`roulette` `slots`")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}

exports.conf = {
  aliase:[]
}

exports.help = {
  name:"help",
  usage:"balance / balance userID / balance @user",
  description:"You learn balance"
}