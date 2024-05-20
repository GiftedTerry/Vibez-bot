const axios = require('axios');
const { registerCommand } = require("../lib/vibez");
const fs = require("fs-extra");
const { exec } = require("child_process");
const child_process = require('child_process');
const { unlink } = require('fs').promises;

// Function to sleep for a specified time
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to convert GIF to video and retrieve video buffer
const GIFBufferToVideoBuffer = async (image) => {
  const filename = `${Math.random().toString(36)}`;
  await fs.writeFileSync(`./${filename}.gif`, image);
  child_process.exec(`ffmpeg -i ./${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./${filename}.mp4`);
  await sleep(4000);
  const buffer = await fs.readFileSync(`./${filename}.mp4`);
  await Promise.all([unlink(`./${filename}.mp4`), unlink(`./${filename}.gif`)]);
  return buffer;
};

// Function to generate a reaction command
const generateReactionCommand = (reactionName, reactionEmoji) => {
  registerCommand({
    name: reactionName,
    category: "Reaction",
    reaction: reactionEmoji,
  }, async (originalMessage, zk, commandOptions) => {
    const { authorMessage, authorMsgReplied, reply, ms, msgReplied } = commandOptions;
    const url = `https://api.waifu.pics/sfw/;
    try {
      const response = await axios.get(url);
      const imageUrl = response.data.url;
      // Get the GIF buffer using the getBuffer function
      const gifBufferResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const gifBuffer = await gifBufferResponse.data;
      // Convert the GIF to video and get the video buffer
      const videoBuffer = await GIFBufferToVideoBuffer(gifBuffer);
      // Send the video with Vibez
      if (msgReplied) {
        const txt = `@${authorMessage.split("@")[0]} ${reactionName} @${authorMsgReplied.split("@")[0]}`;
        zk.sendMessage(originalMessage, {
          video: videoBuffer,
          gifPlayback: true,
          caption: txt,
          mentions: [authorMessage, authorMsgReplied],
        }, { quoted: ms });
      } else {
        const videoMessage = {
          video: videoBuffer,
          gifPlayback: true,
          caption: `@${authorMessage.split("@")[0]} ${reactionName} everyone`,
          mentions: [authorMessage],
        };
        zk.sendMessage(originalMessage, videoMessage, { quoted: ms });
      }
    } catch (error) {
      reply('Error occurred while retrieving the data. :' + error);
      console.log(error);
    }
  });
};

// ... (use the generateReactionCommand function to create reaction commands)
generateReactionCommand("bully", "👊");
generateReactionCommand("cuddle", "🤗");
generateReactionCommand("cry", "😭");
generateReactionCommand("hug", "😊");
generateReactionCommand("awoo", "🐺");
generateReactionCommand("kiss", "😘");
generateReactionCommand("lick", "👅");
generateReactionCommand("pat", "👋");
generateReactionCommand("smug", "😏");
generateReactionCommand("bonk", "🔨");
generateReactionCommand("yeet", "🚀");
generateReactionCommand("blush", "😊");
generateReactionCommand("smile", "😄");
generateReactionCommand("wave", "👋");
generateReactionCommand("highfive"🙌");
generateReactionCommand("handhold"🤝");
generateReactionCommand("nom", "👅");
generateReactionCommand("bite", "🦷");
generateReactionCommand("glomp", "🤗");
generateReactionCommand("slap", "👋");
generateReactionCommand("kill", "💀");
generateReactionCommand("kick", "🦵");
generateReactionCommand("happy", "😄");
generateReactionCommand("wink", "😉");
generateReactionCommand("poke", "👉");
generateReactionCommand("dance", "💃");
generateReactionCommand("cringe", "😬");
