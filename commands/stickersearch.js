
const axios = require("axios");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
const { registerCommand } = require("../lib/vibez");

registerCommand({
  name: "stickersearch",
  category: "Search",
  reaction: "🔎"
}, async (destination, zk, commandOptions) => {
  const { reply, message, args, authorName } = commandOptions;
  if (!args[0]) {
    reply("Please provide a search term!");
    return;
  }
  const searchTerm = args.join(" ");
  const tenorApiKey = "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c"; // Replace with your Tenor API key
  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(`https://tenor.googleapis.com/v2/search?q=${gifSearchTerm}&key=${tenorApiKey}&client_key=my_project&limit=8&media_filter=gif);
      const gifUrl = response.data.results[i].media_formats.gif.url;
      const packName = authorName; // Replace with your sticker pack name
      const sticker = new Sticker(gifUrl, {
        pack: packName,
        author: 'Vibez-MD',
        type: StickerTypes.FULL,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 60,
        background: "transparent",
      });
      const stickerBuffer = await sticker.toBuffer();
      zk.sendMessage(destination, { sticker: stickerBuffer }, { quoted: message });
    }
  } catch (error) {
    console.error("Error searching for stickers:", error);
    reply("Error searching for stickers.");
  }
});
