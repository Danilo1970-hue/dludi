const token = 'ODAyMjk2MDAxMDIwNTU5Mzkw.YAtKYA.FrsKF3zuFcAoPRz5oR8bLJTVYoc';
const {welcome, purge, kick, ban, status, say, mute} = require("discord-bot-maker");
const Discord = require("discord.js");
const bot = new Discord.Client();
 const client = new Discord.Client();

welcome(bot, {
  privatemsg : "Private Message", 
  publicmsg : "Public Message", //@GUILDNAME @MEMBER
  publicchannelid : "798909581971030027" //CHANNEL ID
});
 
purge(bot, {
  prefix:"!",
  purgecommand: "purge",
  errormsg: "asd",
  nopermmsg: "asd",
});
 
kick(bot, {
  prefix:"!",
  kickcommand: "kick",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  higherroleerrormsg: "Higher Role Error",
  defaultreason: "Default Reason",
  kickmsg: "@KICKAUTHOR @KICKEDUSER @REASON" //@KICKAUTHOR @KICKEDUSER @REASON
});
 
ban(bot, {
  prefix:"!",
  bancommand: "ban",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  higherroleerrormsg: "Higher Role Error",
  defaultreason: "Default Reason",
  banmsg: "Ban Message" //@BANAUTHOR @BANNEDUSER @REASON
});
 
status(bot, {
  type: "PLAYING", //PLAYING, WATCHING, STREAMING
  title: "Slusa Kemala"
})
 
say(bot, {
  prefix:"!",
  nopermmsg: "No Perm Error"
  });
 
 

mute(bot, {
  prefix:"!",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  alreadyhasrole: "Already Has Role Error",
  roleid: "999999999999999999", //SECONDARY ROLE ID*
  defaultreason: "Default Reason",
  mutemsg: "Muted" //@MUTEDUSER, @MUTEAUTHOR, @REASON
});


 
bot.login(token)