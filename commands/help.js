const fs = require('fs')
const Discord = require('discord.js')
const config = require('../config.json');
const color = require('../data/colors.json');

module.exports = {
    name: 'help',
    description: 'Sends you the bot\'s commands',
    async execute(bot, message, args) {
        const embed = new Dicord.RichEmbed()
        .setTitle("Avari Help Menu")
        .setThumbnail(bot.user.avatarURL)
        .addField("Misc Commands", "`help`, `ping`")
        .setColor("RANDOM")
        .setTimestamp();
        message.channel.send(embed);
      },
};
