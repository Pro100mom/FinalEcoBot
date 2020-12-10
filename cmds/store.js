const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP-ранги **\n\nBronze: 3500 Coins [!buy bronze]\n\n**Предметы из жизни**\n\nFresh Nikes: 600 [!buy nikes]\nCar: 800 [!buy car]\nMansion: 1200 [!buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}


exports.conf = {
  aliase:["shop"]
}

exports.help = {
  name:"store",
  usage:"balance / balance userID / balance @user",
  description:"You learn balance"
}