const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
 
  let ownerID = 'Your ID'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Удалено ${args[1]} монет \n\nБаланс: ${bal}**`);
    message.channel.send(moneyEmbed)

};

exports.conf = {
  aliase:["rm"]
}

exports.help = {
  name:"rem-money",
  usage:"balance / balance userID / balance @user",
  description:"You learn balance"
}