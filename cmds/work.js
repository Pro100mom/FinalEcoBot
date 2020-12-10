const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
   

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`**Вы уже работали недавно\n\nПопробуй еще раз через ${time.minutes}m ${time.seconds}s **`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Программист','Строитель','Официант','Басбой','Шеф','Механик']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`**Вы работали как ${replies[result]} и заработали ${amount} монет**`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



exports.conf = {
  aliase:[]
}

exports.help = {
  name:"work",
  usage:"balance / balance userID / balance @user",
  description:"You learn balance"
}