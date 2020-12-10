const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   
  
    if (args[0] == 'bronze') {
    
      let embed = new Discord.MessageEmbed()
      .setDescription("**Бронзовый ранг**")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'nikes') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Свежие Найки**")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'car') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Машина**")
      .setColor("#FFFFFF")
      message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Особняк**")
    .setColor("#FFFFFF")
    message.channel.send(embed)
  }

  }

  
  exports.conf = {
    aliase:["shop2"]
}

exports.help = {
    name:"store2",
    usage:"balance / balance userID / balance @user",
    description:"You learn balance"
}