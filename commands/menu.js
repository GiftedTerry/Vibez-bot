
const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, respond, prefix, authorName, mybotpic } = commandeOptions;
  const { cm } = require(__dirname + "/../framework//zokou");
  let commands = {};
  let mode = "public";

  if ((s.MODE).toLocaleLowerCase() != "yes") {
    mode = "private";
  }

  cm.map(async (com, index) => {
    if (!commands[com.categorie]) commands[com.categorie] = [];
    commands[com.categorie].push(com.nomCom);
  });

  moment.tz.setDefault('Etc/GMT');
  const time = moment().format('HH:mm:ss');
  const date = moment().format('DD/MM/YYYY');

  let infoMsg = `**BOT INFORMATION**
  • Prefix: ${s.PREFIXE}
  • Owner: ${s.OWNER_NAME}
  • Mode: ${mode}
  • Commands: ${cm.length}
  • Date: ${date}
  • Time: ${time}
  • Memory: ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
  • Platform: ${os.platform()}
  • Developer: Djalega++ & M๏𝓱keℽ D Lบffy
  `;

  let menuMsg = `**Hello, ${authorName}!**
  **List of commands:**
  `;

  for (const cat in commands) {
    menuMsg += `**${cat}**
    `;
    for (const cmd of commands[cat]) {
      menuMsg += `• ${cmd}
      `;
    }
    menuMsg += `
    `;
  }

  menuMsg += `**How to use:**
  Insert ${prefix} followed by the command name.
  **Powered by Zokou-MD**
  `;

  const link = mybotpic();

  if (link.match(/\.(mp4|gif)$/i)) {
    try {
      zk.sendMessage(dest, {
        video: { url: link },
        caption: infoMsg + menuMsg,
        footer: "I am Zokou-MD, developed by Djalega++",
        gifPlayback: true
      }, { quoted: ms });
    } catch (e) {
      console.log("Menu error: " + e);
      respond("Menu error: " + e);
    }
  } else if (link.match(/\.(jpeg|png|jpg)$/i)) {
    try {
      zk.sendMessage(dest, {
        image: { url: link },
        caption: infoMsg + menuMsg,
        footer: "I am Zokou-MD, developed by Djalega++"
      }, { quoted: ms });
    } catch (e) {
      console.log("Menu error: " + e);
      respond("Menu error: " + e);
    }
  } else {
    respond(infoMsg + menuMsg);
  }
});
