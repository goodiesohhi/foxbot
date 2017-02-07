
const Discord = require('discord.js');

    const client = new Discord.Client();

const hook = new Discord.WebhookClient('277988460193906689', 'mW92pZ9fh3BryA8-ANnVLD0PoDFNq6n-kcMqr2DRfkFr4XfWgW6QIGq0EGTlTWuflQVO');

    client.on('ready', () => {
      console.log(`Logged in as ${client.user.username}!`);
    });


    client.on("message", function (message){



var commands = message.toString();
var stringArray = commands.split(" ");
  let who = client.users.find(u => u.username === stringArray[1])
    


     
    if (stringArray[0] === '~avatar' ) {
if(who) {
if(who.avatarURL){
   message.reply(who.avatarURL);
}
else {
 message.reply(who +" does not have custom avatar!");
}
} 

else
{
message.reply("User not found!")
}
    }
  });




    client.on('message', msg => {
      if (msg.content === '~ping') {
        msg.reply('Pong!');
      }
    });

    client.login('Mjc4MjkyNDc3MzA2MzM5MzI4.C3qhCQ.9Ic4H2M1XFu-VM5j2pLS5h7YvTs');

hook.sendMessage('BOT ON!');