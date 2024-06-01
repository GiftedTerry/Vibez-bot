// commands/alive.js

const { prefix } = require('../config');
const { reply } = require('../functions');

module.exports = {
  name: 'alive',
  description: 'Check if the bot is alive',
  execute(message) {
    if (message.content === `${prefix}alive`) {
      message.react('⚡');
      reply(message, 'Sup boss, Vibez is alive!', 50);
    }
  }
};
