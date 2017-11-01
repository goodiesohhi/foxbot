const express = require('express')
, stylus = require('stylus')
  , nib = require('nib')
const Discord = require('discord.js');
var app = express()
var port = process.env.PORT || 8080;
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}



app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index.pug',
    { title : 'Home' }
    )
})
app.listen(port)

    const client = new Discord.Client();

const hook = new Discord.WebhookClient('277988460193906689', 'mW92pZ9fh3BryA8-ANnVLD0PoDFNq6n-kcMqr2DRfkFr4XfWgW6QIGq0EGTlTWuflQVO');
const hookdev = new Discord.WebhookClient('375102122129227777', 'QRxQDqCrPVdmvKKun8MimWGkprE5QNh2rOHvSbznXdmSTxnx8G6uk541PtRGnI1n26e_');

    client.on('ready', () => {
      console.log(`Logged in as ${client.user.username}!`);
    });


    client.on("message", function (message){

      function send(txt) {
         message.reply(txt);
      }



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
hook2.sendMessage('DevBot Foxy Awake and Ready <3')
