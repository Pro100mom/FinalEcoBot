const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
 

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`   Укажите сумму для игры | m!roul <цвет> <сумма>`);

let moneymore = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`**Вы ставите больше, чем имеете**`);

let colorbad = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`   Укажите цвет | Красный [1.5x] черный [2x] зеленый [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "ч" || colour.includes("черный")) colour = 0;
    else if (colour == "р" || colour.includes("красный")) colour = 1;
    else if (colour == "з" || colour.includes("зеленый")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Ты победил ${money} монет\n\nМножитель: 15x`);
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} выиграл ${money} на зеленом`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Ты победил ${money} монет\n\nМножитель: 1.5x`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Ты победил ${money} coins\n\nМножитель: 2x`);
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`**Ты проиграла  ${money} монет\n\nМножитель: 0x**`);
        message.channel.send(moneyEmbed4)
    }
}

  
exports.conf = {
  aliase:["roul"]
}

exports.help = {
  name:"roulette",
  usage:"balance / balance userID / balance @user",
  description:"You learn balance"
}