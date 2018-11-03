const fs = require('fs')
const Discord = require('discord.js')
const config = require('../config.json');
const color = require('../data/colors.json');

module.exports = {
    name: 'help',
    description: 'Sends you the bot\'s commands',
    async execute(bot, message, args) {
        message.channel.send("You have summoned ben shapiro")
    },
};