const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const santa = require('../santa.json')

let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
let tag = "✩";
const atan = message.author.id;
const user = client.users.cache.get('345892697955106818');
const user2 = client.users.cache.get('795258614704504862');
const kufur = ".başvuru";
const log = "790861628153266205";
  if(message.content.includes(kufur)){
  if (message.channel.id !== "795586528235487262") { // başvuru odası

{
           if (message.author.id === message.guild.ownerID) return;
              message.channel.send(`.başvuru komutunu bu kanalda kullanamazsın`).then(message.delete({timeout: 10})).then(message => message.delete({timeout: 5000}))
  return;
            }
  }
  }
   if (message.channel.id !== santa.oda) { // allaha emanet

     if(!message.author.username.includes(tag)){
    const odrane = new Discord.MessageEmbed().setTitle(`HATA!`).setDescription(`Başvuru yapabilmek için tagımızı almalısın. Tagımız: \`${tag}\` `)
    message.channel.send(odrane).then(message.delete({timeout: 10})).then(message => message.delete({timeout: 5000}))
    return;
  }// KULLANICIDA TAG YOKSA BAŞVURU YAPAMAZ

const santa = new Discord.MessageEmbed().setTitle(`<a:chrionyldz:795543678096506880>  Başvurunuz Onaylandı`).setDescription(`Yetkili Başvurusu Yaptınız İlgili Yetkililer Sizle İletişime Geçicektir. İyi Eğlenceler.`).setColor(`RANDOM`).setTimestamp()
message.channel.send(santa).then(message => message.delete({timeout: 5000})).then(message.delete({timeout: 5000}))
const santa2 = new Discord.MessageEmbed().setTitle(`YENİ BAŞVURU GELDİ`).setDescription(`<@${atan}> Adlı Kullanıcı Yekili Başvurusu Yaptı En Kısa Sürede İlgilen Lütfen!!`)
user.send(santa2) // yetkili sorumlusu dm
user2.send(santa2) // yetkili sorumlusu dm2
log.send(santa2)
}
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: 'başvuru',
    description: 'odrane'
};
