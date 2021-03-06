const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
 

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Назовите кого-нибудь, кто заплатит**`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Укажите сумму к оплате**`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Вы не можете заплатить кому-то отрицательные деньги**`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**У тебя не так много денег**`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Вы перевели  ${user.user.username} ${args[1]} монет**`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

exports.conf = {
  aliase:[]
}

exports.help = {
  name:"pay",
  usage:"balance / balance userID / balance @user",
  description:"You learn balance"
}