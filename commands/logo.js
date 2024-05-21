const { vibez } = require("../lib/vibez");
var mumaker = require("mumaker");
vibez({ nomCom: "hacker",
    categorie: "Logo", reaction: "👨🏿‍💻" }, async (originMessage, zk, commandOptions) => {
    const { prefix, arg, ms, respond } = commandOptions;
    if (!arg || arg == "") {
        respond("*__Example : * " + prefix + "hacker Vibez-Md");
        return;
    }
    try {
        let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
        let anu = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", arg); //
        //
       // let res = Object.values(anu)[3];
        // console.log("&€"+res);
      //  let lien = "https://e1.yotools.net" + res;
        respond("* vibing😎...*");
        await zk.sendMessage(originMessage, { image: { url:anu.image}, caption: "* \t Logo by Vibez-Md*" }, { quoted: ms });
    }
    catch (e) {
        respond("😎😎 " + e);
    }
});
vibez({ nomCom: "dragonball", categorie: "Logo", reaction: "🐉" }, async (dest, zk, commandOptions) => {
    let { arg, respond, prefix, ms } = commandOptions;
    try {
        const noArgMsg = `*_EXAMPLE *:  ${prefix}dragonball Vibez-Md`;
        //  if(arg=='') {await zok.sendMessage(dest,{text:noArgMsg},{quoted:infoMessage}); return;}
        if (arg == '' || !arg) {
            respond(noArgMsg);
            return;
        }
        var lienMaker = "https://ephoto360.com/tao-hieu-ung-chu-phong-cach-dragon-ball-truc-tuyen-1000.html";
        var lienMaker2 = "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";
      
       
        const imgInfo = await mumaker.ephoto(lienMaker2, arg.join(' '));
       
        await zk.sendMessage(dest, { text: " *\t ongoing treatment...*" }, { quoted: ms });
       // var idImg = Object.values(imgInfo)[3];
       
        await zk.sendMessage(dest, { image: { url: imgInfo.image }, caption: "* \t Logo by Vibez-Md*" }, { quoted: ms });
    }
    catch (e) {
        respond("😎😎 " + e);
    }
});
////////////////////////////
vibez({ nomCom: "naruto", categorie: "Logo", reaction: "⛩" }, async (dest, zk, commandOptions) => {
    let { ms, arg, respond, prefix } = commandOptions;
    try {
        if (!arg || arg == '') {
            respond("*_Example : * " + prefix + "naruto Vibez-Md");
            return;
        }
        var nar = "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html";
        //let img= await //mumaker.textpro('https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html',arg);
        respond("*vibing😎...*");
        var radio2 = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6";
        var img = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", arg.join(' '));
        
        await zk.sendMessage(dest, { image: { url: img.image }, caption: "\t\t *Logo by Vibez-Md *" }, { quoted: ms });
    }
    catch (e) {
        respond("😎😎 " + e);
    }
});
//didong
/*zokou({ nomCom: "didong", categorie: "Logo", reaction: "📱" }, async (dest, zk, commandOptions) => {
    let { ms, repondre, arg, prefixe } = commandOptions;
    
    var titre = "\t logo by Zokou-Md";
    try {
      var lien = "https://ephoto360.com/tao-anh-che-vui-tu-choi-cuoc-goi-voi-ten-cua-ban-930.html";
        if (!arg || arg == "") {
           respond(`*exemple :* ${prefix}didong Vibez-Md`)
            return ;
        }
      console.log(typeof arg[0])
        var maker = mumaker.ephoto(lien, "arg");
        var lienImg = Object.values(maker)[1];
        await zk.sendMessage(dest, { image: { url: lienImg }, caption: title });
    }
    catch (e) {
        respond("😎😎 " + e);
    }
});
*/


vibez({ nomCom: "didong", categorie: "Logo", reaction: "📱" }, async (dest, zk, commandOptions) => {
    let { arg, respond, prefix, ms } = commandeOptions;
   try {
     var title = "\t* logo by Vibez-Md*";
      var lien = "https://ephoto360.com/tao-anh-che-vui-tu-choi-cuoc-goi-voi-ten-cua-ban-930.html";
        if (!arg || arg == "") {
           respond(`*example :* ${prefix}didong Vibez-Md`)
            return ;
        }
     
        var maker =await mumaker.ephoto(lien,arg.join(' '));
    
        
     respond('*vibing😎...*')
       await zk.sendMessage(dest, { image: { url: maker.image}, caption: titre });
    }
    catch (e) {
        respond("😎😎 " + e);
    }
    }
);


vibez({nomCom : "wall",categorie : "Logo",reaction : "👍"} , async (dest,zk,commandOptions) =>{

  const {arg,repondre,ms,prefixe} = commandeOptions;
  if(!arg[0]) { repondre( `Exemple of using commande:\n ${prefixe}wall Zokou-MD` ); return ;}
   let text = arg.join(" ")
   mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", text)
.then((data) =>{
 zk.sendMessage(dest,{image : { url : data.image},caption : 'Logo by'},{quoted:ms})
}) 
.catch(console.log)
})
;
vibez({nomCom: "summer", categorie: "Logo", reaction: "🌞"}, async (dest, zk, commandOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Exemple of using commande:\n ${prefixe}summer My text`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch(console.error);
});

vibez({nomCom: "neonlight", categorie: "Logo", reaction: "💡"}, async (dest, zk, commandOptions) => {
  const { arg, respond, ms, prefix } = commandOptions;
  /*if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}neonlight My text`);
    return;
  }*/
  if(!arg ||arg=="")
  {
      respond(`Example of using command:\n ${prefix}neonlight My text`);
    return;
  }
  
  const text = arg.join(" ");
  try{
    
    let maker=await mumaker.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html",arg)
    //repondre(stringify(maker))
    /*.then((data) => {*/
     zk.sendMessage(dest, { image: { url: maker.image }, caption: 'Logo by' }, { quoted: ms });
    
    /*.catch(console.error);*/

  
}catch(e){respond("😎😎 "+e)}

});

vibez({nomCom: "greenneon", categorie: "Logo", reaction: "🟢"}, async (dest, zk, commandOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Exemple of using commande:\n ${prefixe}greenneon My text`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/green-neon-text-effect-874.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch(console.error);
});

vibez({nomCom: "glitch", categorie: "Logo", reaction: "🎛️"}, async (dest, zk, commandOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Exemple of using commande:\n ${prefixe}glitch My text`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch(console.error);
});

vibez({nomCom: "devil", categorie: "Logo", reaction: "😈"}, async (dest, zk, commandOptions) => {
  const { arg, repondre, ms, prefixe } = commandOptions;
  if (!arg[0]) {
    repondre(`Exemple of using commande:\n ${prefix}devil My text`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",arg)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch(console.error);
});
////////////////////
vibez(
  {nomCom:"boom",categorie:
    "Logo",reaction:"💥"},async(dest,zk,commandOptions)=>{

    let {ms,repondre,prefixe,arg}=commandeOptions;

        if(!arg||arg=="")
        {
   
          respond(`  Exemple :* ${prefixe}boom Zokou`)
          return ;
        }
       try{
              var radio2 = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6";
         let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
var lien="https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html";
        console.log(arg)
         var img =await mumaker.ephoto(lien,arg)

        //var idImg = Object.values(img)[3];
       // var lienImage = "https://e1.yotools.net/" + idImg; 

  /* let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
         var v="https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html";
         var c="https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html"
        let anu = await mumaker.ephoto4(v, arg, radio);      
         let res = Object.values(anu)[3];*/
        // console.log("&€"+res);
       // let lien = "https://e1.yotools.net" + res;
         

respond("  processing ...")
         await zk.sendMessage(dest,{image:{url:img.image},caption:"\t *Logo by Vibez-Md*"})
         
        // await zk.sendMessage(dest,{image:{url:lienImage},caption:"\t *Logo by Vibez-Md*"})
         


       }catch(e){respond("🥵🥵 "+e)}
    
    }
)
//water
vibez({nomCom:"water",categorie:"Logo",reation:"💦"},async(dest,zk,commandOptions)=>{

  
var {ms,repondre,arg,prefixe}=commandeOptions;
  if(!arg||arg=="")
  {
    respond(`${prefixe}water zokou`)
    return;
  }
  try{
    var lien ="https://en.ephoto360.com/create-water-effect-text-online-295.html";
    var img =await mumaker.ephoto(lien,arg);
    respond(" processing ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:"  *Logo by Zokou-Md*"})
  }catch(e){respond(`🥵🥵 ${e}`)}

});

vibez({ nomCom: "snow", categorie: "Logo", reaction: "❄️" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefixe,repondre } = commandOptions;
  if (!arg[0]) {
    respond(`Exemple of using commande:\n ${prefix}Snow My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-beautiful-3d-snow-text-effect-online-1101.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

vibez({ nomCom: "transformer", categorie: "Logo", reaction: "🤖" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix,respond } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}Transformer My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occured :", err);
    });
});

vibez({ nomCom: "thunder", categorie: "Logo", reaction: "⚡" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix,respond } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}Thunder My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occurred :", err);
    });
});

vibez({ nomCom: "harrypotter", categorie: "Logo", reaction: "🧙‍♂️" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix,respond } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}HarryPotter My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occurred :", err);
    });
});

vibez({ nomCom: "cat", categorie: "Logo", reaction: "🪟" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}FoggyWindow My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occurred :", err);
    });
});

                                                                         

vibez({ nomCom: "whitegold", categorie: "Logo", reaction: "💫" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix,respond } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}WhiteGold My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occurred :", err);
    });
});

vibez({ nomCom: "lightglow", categorie: "Logo", reaction: "🌟" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix,respond } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}LightGlow My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occurred :", err);
    });
});

vibez({ nomCom: "thor", categorie: "Logo", reaction: "🔨" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix,respond } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}Thor My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occurred :", err);
    });
});

vibez({ nomCom: "neon", categorie: "Logo", reaction: "💡" }, async (dest, zk, commandOptions) => {
  const { arg, ms, prefix,respond } = commandOptions;
  if (!arg[0]) {
    respond(`Example of using command:\n ${prefix}Neon My text`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/neon-text-effect-online-879.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("An error has occurred :", err);
    });
});



vibez({nomCom:"purple",categorie:"Logo",reaction:"🟪"},async(dest,zk,commandOptions)=>{
  var {ms,respond,prefix,arg}=commandOptions;
  
    try{
      if(!arg||arg=="")
  {
    respond(prefix+"purple Vibez-MD");return;}
      const lien="https://en.ephoto360.com/purple-text-effect-online-100.html"
      var img = await mumaker.ephoto(lien,arg);
      respond("vibing😎 ...")
      await zk.sendMessage(dest,{image:{url:img.image},caption:"      *Logo by Vibez-MD*"});
    }catch(e){respond(e)}
  
})

vibez({nomCom:"gold",categorie:"Logo",reaction:"🪙"},async(dest,zk,commandOptions)=>{


  let {ms,arg,prefix,respond}=commandOptions;
  try{
      if(!arg||arg=="")
      {
        respond(prefix+"gold Vibez-MD");return;
      }

    var lien="https://en.ephoto360.com/modern-gold-4-213.html";

    var img = await mumaker.ephoto(lien,arg);
   respond("vibing😎 ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *Logo by Vibez-Md*"},{quoted:ms})
  }catch(e){respond(e)}
})


vibez({nomCom:"arena",categorie:"Logo",reaction:"🙃"},async(dest,zk,commandOptions)=>{


  let {ms,arg,prefix,respond}=commandOptions;
  try{
      if(!arg||arg=="")
      {
        respond(prefix+"arena Vibez-MD");return;
      }

    var lien="https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html";

    var img = await mumaker.ephoto(lien,arg.join(' '));
   respond("vibing😎 ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *Logo by Vibez-Md*"},{quoted:ms})
  }catch(e){respond(e)}
})

vibez({nomCom:"hell",categorie:"Logo",reaction:"🔥"},async(dest,zk,commandOptions)=>{


  let {ms,arg,prefix,respond}=commandOptions;
  try{
      if(!arg||arg=="")
      {
        respond(prefix+"hell Vibez-MD");return;
      }

    var lien="https://textpro.me/create-a-free-online-hellfire-text-effect-1152.html";

    var img = await mumaker.ephoto(lien,arg.join(' '));
   respond("vibing😎 ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *Logo by Vibez-Md*"},{quoted:ms})
  }catch(e){respond(e)}
})
