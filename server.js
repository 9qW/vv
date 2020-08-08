require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);




////بكجات
const { Client, RichEmbed, Attachment} = require("discord.js");
var { Util } = require("discord.js");
//const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', message => {
    // If the message is '!rip'
    if (message.content === 'الوان') {
      message.delete()
        // Create the attachment using Attachment
        const attachment = new Attachment('https://f.top4top.io/p_16749xesv0.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});



const prefix = "#";
const PREFIX = "#";




            

client.on('message', message => {
	if (message.content === PREFIX + 'join') {
    message.delete();
		client.emit('guildMemberAdd', message.member || message.guild.fetchMember(message.author));
	}
});



const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	
	let fontSize = 32;

	do {
		
		ctx.font = `${fontSize -= 10}px sans-serif`;
		//avatar size
	} while (ctx.measureText(text).width > canvas.width - 220);

	
	return ctx.font;
};
/*
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("590087517324312577");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
*/
client.on('guildMemberAdd', async member => {
 /*let cchannel = member.guild.channels.get("737559816368685068");
    if (!cchannel) {
       console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("590087517324312577");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                  var interval = setInterval (function () {
 cchannel.sendMessage(`Syned By ; ${Invite.inviter} `)     }, 0);
 }
            dat[Inv] = Invite.uses;
       
       });
    });*/
	const channel = member.guild.channels.find(ch => ch.name === 'per');
	if (!channel) return

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./welcome.png');
	ctx.drawImage(background, 0, 5, canvas.width, canvas.height);

	//ctx.strokeStyle = '#74037b';
	//ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(member.displayName, canvas.width / 2.4, canvas.height / 1.5);

	ctx.beginPath();
	ctx.arc(125, 125, 99, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 20, 20, 200, 207);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome.png');

	channel.send(' ', attachment);
});
/*
client.on('guildMemberAdd', member => {
  member.guild.fetchInvite().then(guildInvite => {
    const ei = invite[member.guild.id];
    invite[member.guild.id] = guildInvite;
        const invite = guildInvite.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "per");
    logChannel.send(`Syned By : ${inviter.tag}`);
  });
});
*/
/*

client.on('guildMemberAdd', member => {
  // To compare, we need to load the current invite list.
  member.guild.fetchInvites().then(guildInvites => {
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.get(invite.inviter.id);
    // Get the log channel (change to your liking)
    const logChannel = member.guild.channels.find(channel => channel.name === "join-logs");
    // A real basic message with the information we need. 
    logChannel.send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
  });
});
*/


/*

client.on('message', message => {
	if (message.author.client) return;
    if (message.content.startsWith(prefix + 'colors'))
      var channe = member.guild.channels.find(ch => ch.name === 'visor');
const (!channe) return;
  //message.channel.sendFile("./colors.png");
  var attachmen = new Discord.Attachment('colors.png,');
chnanel.send(' ',attachmen);
  });
    //  message.channel.send(`https://l.top4top.io/p_16702d54d0.png`)

*/
/*

client.on('message', message => {
	if (message.author.client) return;
    if (message.content.startsWith('الوان'))
message.channel.send({
	files: [
	  "colors.png"
	]
  });
})



 client.on("message", message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    let argumento = message.content.split(" ")

    for (i = 0; i < argumento.length; i++){
        if (argumento[i] == "fenley" || argumento[i] == "colors"){
            random = Math.floor(Math.random() * DogWebsite().length);
            content = DogWebsite();
            if(0 < random && random < 100){
                message.channel.send(content[random]);
            } 
            break;
        }
    }
    switch (args[0]){
        case "colors":
            random = Math.floor(Math.random() * DogWebsite().length);
            content = DogWebsite();
            message.channel.send(content[random]);
            break;
    }
})



function DogWebsite(){
    message = ["https://l.top4top.io/p_16702d54d0.png"]

    return message;
}





client.on("message", message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    let argumento = message.content.split(" ")

    for (i = 0; i < argumento.length; i++){
        if (argumento[i] == "fenley" || argumento[i] == "Fenley"){
            random = Math.floor(Math.random() * DogWebsite().length);
            content = DogWebsite();
            if(0 < random && random < 100){
                message.channel.send(content[random]);
            } 
            break;
        }
    }
    switch (args[0]){
        case "fenley":
            random = Math.floor(Math.random() * DogWebsite().length);
            content = DogWebsite();
            message.channel.send(content[random]);
            break;
    }
})


function DogWebsite(){
    message = [" "]
  
  return message;
}

*/







client.on('message', message => {
	let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
	 const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Wrong color number.**`)
.setColor(`000000`)

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


 var a = message.guild.roles.find("name",`${args}`)
		  if(!a)return;
const embed = new Discord.RichEmbed()
			  
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color has been changed successfully.**`)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
	if (!args)return;
setInterval(function(){})
			let count = 0;
			let ecount = 0;
  for(let x = 1; x < 201; x++){
	 
	  message.member.removeRole(message.guild.roles.find("name",`${x}`))
	
	  }
		  message.member.addRole(message.guild.roles.find("name",`${args}`));
  }
  });


client.on('guildMemberAdd', member => {
    console.log('User' + member.user.tag + 'has joined the server!');
  
    var role = member.guild.roles.find('name', 'Urray.');
    member.addRole(role);
})

