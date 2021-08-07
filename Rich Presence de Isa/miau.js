const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity : {
      details : "vivan los mishis putos", //acá puedes escribir lo que quieras :3
      assets : {
        large_image : "05f9a", //el código de una de las imágenes de tu app (el nombre) 
        large_text : "miau"  // texto que aparece en la imagen 
         
      },
      buttons : [{label : "discord server" , url : "https://discord.gg/mishisquad"}] // acá puedes poner la url de una red social!
      
    }
  });
  
});

client.login({ clientId : "494769648445947915" }).catch(console.error);  // en donde dice client ID, pones la id de tu app que hiciste en el developer portal 
