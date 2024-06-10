const fs = require('fs-extra');
const dotenv = require('dotenv');

// Load environment variables from .env file
if (fs.existsSync('.env')) {
  dotenv.config({ path: __dirname + '/.env' });
}

// Set global variables and constants
global.audio = '';
global.video = '';
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || '';
global.email = 'protechackers@gmail.com';
global.location = 'Africa, Lagos.';
global.mongodb = process.env.MONGODB_URI || '';
global.allowJids = process.env.ALLOW_JID || 'null';
global.blockJids = process.env.BLOCK_JID || 'null';
global.DATABASE_URL = process.env.DATABASE_URL || '';
global.timezone = process.env.TZ || process.env.TIME_ZONE || 'Africa/Lagos';
global.github = '(link unavailable)';
global.gurl = 'https://whatsapp.com/channel/0029VaR2hFSFXUuYmxbRy83Q';
global.website = 'https://whatsapp.com/channel/0029VaR2hFSFXUuYmxbRy83Q';
global.THUMB_IMAGE = '(link unavailable)';
global.caption = 'Vibez-MD';
global.devs = '2349122128803';
global.sudo = '2349122128803';
global.owner = '2349122128803';
global.style = '5';
global.flush = 'false';
global.gdbye = 'false';
global.wlcm = 'false';
global.warncount = 3;
global.disablepm = 'false';
global.disablegroup = 'false';
global.MsgsInLog = 'false';
global.userImages = 'text';
global.waPresence = 'null';
global.readcmds = 'false';
global.readmessage = 'false';
global.readmessagefrom = 'null,234xxxxxxxx';
global.read_status = 'false';
global.save_status = 'false';
global.save_status_from = 'null,234xxxxxxxx';
global.read_status_from = '2349122128803,234xxxxxxxx';
global.api_smd = '';
global.scan = '';
global.SESSION_ID = '';

module.exports = {
  menu: '',
  HANDLERS: '.',
  BRANCH: 'main',
  VERSION: '1.0.0',
  caption: 'Vibez-MD',
  author: 'Pro tech',
  packname: 'pro tech',
  botname: 'Vibez-MD',
  ownername: 'Pro tech',
  errorChat: '',
  KOYEB_API: 'false',
  REMOVE_BG_KEY: '',
  OPENAI_API_KEY: '',
  HEROKU_API_KEY: '',
  HEROKU_APP_NAME: '',
  antilink_values: 'all',
  HEROKU: false,
  WORKTYPE: 'private',
  LANG: 'VIBEZ',
};
