
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VxenR2MUN6c0VVYndTU3Z3Zm1QY011NkttbUNWUSt2SGVXMTJWQUpIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZTOU1CMG1QNmxBRGo2R3VRN251NDkvRFFKNEZDb3R1d3A2VlBqSFFpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR2hPeUpOelJFcUdxR1B0YWQxVDlxcWNwZkkyUDRINjFhdEg5eXdpQ1ZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGbXdVQzJ0aTk4NTFtV1hldFZmaXRNZ1RYMlpQenNlcUdTcEc1R3ZJL2tFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOS0J5NmcvNE9MTU9qelVCOURQTVI5V3hGcDJ2ZzZ0bkx5bnlqSDVYSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV4SHdvczMvUlpsdFhaNjIyVmhqdGRRSFk2K3psNTN2S3h2YmcxaFR4eUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxqdkNjS0JvN1VHbXFiY3RYK0gxajYrVXhVVEFXUExDMHNsWjZmdk9IZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHhvNm5SclcyVUZOMkZGZ2tYeXpFazcyUXlhcU5NYjhON3d2ZEViL0FSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlpMTRWVCtSZWYvS1VnVW9SZ1N0UnVWWXBYSGJPaUpDTXhpalExckhKLzlLYU9JTUZuekpjTW55enhVbE5Qbmp1S3k1L2xVVksrZDJJU0V3cXpxZWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJsK3BreWNOMFlCYWp3UDNtRUtWUTZyNWtPSHVLWXpqdTY5aC9RTXZzRlFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwNjAyNDA4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRkIwNkQ1OUI4NjFDNkE1MEVBQUMwNUNFQTcyMDA1RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTE5MDkzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MDYwMjQwODZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTg5RThBQjlFODIxRkQzRUYzRDIxNUQxRERDNkUyNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjExOTA5M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN21QVTNCZHNTdm1Cd1hVdHFQZWhKQSIsInBob25lSWQiOiIwNTdiM2UyOS0wZjA0LTRlMmItYTExOS0xY2UyYmFkNjI3YWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmIrU2xhbU5yOWsrdW5zTHVnSXExYkcwek00PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEvbVR1QVNSMXNJMGVDQ0l6WTEyZ3drWUpuOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKQTNFSlNZViIsIm1lIjp7ImlkIjoiMjU0NzA2MDI0MDg2OjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVtb2p5X0JXWSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStPbWZrQ0VLYm5sYlVHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieXJESzVXU2tDTUlRaHcyTTBIQktZT1VTN2crYzZrRzFYSXBYRnhsUjdDUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZnpra1BoSzc5VUd3R2NJakQxRVpkS0l4dHRZVUxONGNsMTJtTlE2cFBvd2pTV2k2UTdRZy9KOU8rQ05ERVhyUUpDS2RBcWFzMWZSREJCWUorYkY4QUE9PSIsImRldmljZVNpZ25hdHVyZSI6InJ3MzhCTCt3WGFOcFJRcEdRTHlqM2w1WkduMVRVeXhvUUFNcTJUazQ1ZlpMNTJjV25TUzlrUjJFTXAvaWlkdFhlZlZDUEVuTzJDaGJWOEdoRThtS2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA2MDI0MDg2OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNxd3l1VmtwQWpDRUljTmpOQndTbURsRXU0UG5PcEJ0VnlLVnhjWlVld2sifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMTkwOTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlc5In0=" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
