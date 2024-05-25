// Import required modules
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
global.github = process.env.GITHUB || 'https://github.com/GiftedTerry/Vibez-MD';
global.gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vafdaf14inouXFUHqz30';
global.website = process.env.GURL || 'https://whatsapp.com/channel/0029Vafdaf14inouXFUHqz30';
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || 'https://telegra.ph/file/d72deaffcab4cb15c6921.jpg';
global.caption = process.env.CAPTION || 'Vibez-MD';
global.devs = '2349122128803'; // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '2349122128803';
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '2349122128803';

// Bot Settings
global.style = process.env.STYLE || '5';
global.flush = process.env.FLUSH || 'false';
global.gdbye = process.env.GOODBYE || 'false';
global.wlcm = process.env.WELCOME || 'false';
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || 'false';
global.disablegroup = process.env.DISABLE_GROUPS || 'false';
global.MsgsInLog = process.env.MSGS_IN_LOG || 'false';
global.userImages = process.env.USER_IMAGES || 'text';
global.waPresence = process.env.WAPRESENCE || 'null';

// Auto Read Msgs & CMDS
global.readcmds = process.env.READ_COMMAND || 'false';
global.readmessage = process.env.READ_MESSAGE || 'false';
global.readmessagefrom = process.env.READ_MESSAGE_FROM || 'null,234xxxxxxxx';

// Auto Save & Read Status
global.read_status = process.env.AUTO_READ_STATUS || 'false';
global.save_status = process.env.AUTO_SAVE_STATUS || 'false';
global.save_status_from = process.env.SAVE_STATUS_FROM || 'null,234xxxxxxxx';
global.read_status_from = process.env.READ_STATUS_FROM || '2349122128803,234xxxxxxxx';

// API and Session Settings
global.api_smd = 'https://api-smd.onrender.com';
global.scan = '';
global.SESSION_ID = process.env.SESSION_ID || '';

// Export module with settings
module.exports = {
  menu: process.env.MENU || '',
  HANDLERS: process.env.PREFIX || '.',
  BRANCH: process.env.BRANCH || 'main',
  VERSION: process.env.VERSION || '1.0.0',
  caption: global.caption || '',
  author: process.env.PACK_AUTHER || 'Pro tech',
  packname: process.env.PACK_NAME || 'pro tech',
  botname: process.env.BOT_NAME || 'Vibez-MD',
  ownername: process.env.OWNER_NAME || 'Pro tech',
  errorChat: process.env.ERROR_CHAT || '',
  KOYEB_API: process.env.KOYEB_API || 'false',
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  antilink_values: process.env.ANTILINK_VALUES || 'all',
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  LANG: (process.env.THEME || 'Vibez').toUpperCase(),
};

global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || '';
global.aitts_Voice_Id = process.env.AITTS_ID || '37';
global.rank = 'updated';
global.isMongodb = false;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update ${__filename}`);
  delete require.cache[file];
  require(file);
}) || '';
