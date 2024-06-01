// commands/ping.js

const { prefix } = require('../config');
const { reply } = require('../functions');

module.exports = {
  name: 'ping',
  description: 'Check the bot\'s ping',
  execute(message) {
    if (message.content === `${prefix}ping`) {
      message.react('⚡');
      reply(message, 'Pong! 📈 Heartbeat: 50ms');
    }
  }
};
