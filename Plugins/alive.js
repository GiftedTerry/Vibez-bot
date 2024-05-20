const mongoose = require('mongoose');

const options = {
  temp: {
    type: Object,
    default: {}
  },
  rent: {
    type: Object,
    default: {}
  }
};

const AliveSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    default: 'Vibez_MD'
  },
  alive_text: {
    type: String,
    default: 'You didn\'t set alive message yet\nType [.alive info] to get alive message information'
  },
  alive_get: {
    type: String,
    default: 'yes bruh?'
  },
  alive_url: {
    type: String,
    default: ''
  },
  alive_image: {
    type: Boolean,
    default: false
  },
  alive_video: {
    type: Boolean,
    default: false
  },
  antiviewonce: {
    type: String,
    default: 'true'
  },
  antidelete: {
    type: String,
    default: 'true'
  },
  autobio: {
    type: String,
    default: 'true'
  },
  levelup: {
    type: String,
    default: 'true'
  },
  anticall: {
    type: String,
    default: 'false'
  },
  autoreaction: {
    type: String,
    default: 'true'
  },
  permit: {
    type: Boolean,
    default: false
  },
  permit_values: {
    type: String,
    default: 'all'
  },
  chatbot: {
    type: String,
    default: 'true'
  },
  bgm: {
    type: Boolean,
    default: false
  },
  bgmarray: {
    type: Object,
    default: {}
  },
  plugins: {
    type: Object,
    default: {}
  },
  notes: {
    type: Object,
    default: {}
  },
  mention: {
    type: Object,
    default: {}
  },
  filter: {
    type: Object,
    default: {
      suhail_: 'true'
    }
  },
  afk: {
    type: Object,
    default: {}
  },
  ...options
});

const Alive = mongoose.model('Alive', AliveSchema);

module.exports = {
  alive: Alive
};
