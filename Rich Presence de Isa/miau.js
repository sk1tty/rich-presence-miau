const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity : {
      details : "alianzas md 3k", //acá puedes escribir lo que quieras :3
      assets : {
        large_image : "05f9a", //el código de una de las imágenes de tu app 
        large_text : "miau"  // texto que aparece en la imagen 
         
      },
      buttons : [{label : "discord" , url : "https://discord.gg/97uKN2N2hQ"}] // uwu
      
    }
  });
  
});

client.login({ clientId : "494769648445947915" }).catch(console.error);  // en donde dice client ID, pones la id de tu app
