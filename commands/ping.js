const Discord = require('discord.js')
const config = require('../config.json');
const color = require('../data/colors.json');

module.exports = {
    name: 'ping',
    description: 'Sends you the bot\'s ping and API latency',
    async execute(bot, message, args) {
        const loading = await message.channel.send(`Pinging...`);
        let pingEmbed = new Discord.RichEmbed()
            .setThumbnail(config.gif)
            .setColor(color.blue)
            .setAuthor(`Atari`)
            .addField("Pong :ping_pong:", `Latency \`${loading.createdTimestamp - message.createdTimestamp}ms\`\nAPI Latency \`${Math.round(bot.ping)}ms\``);
        loading.edit(pingEmbed)
    },
};