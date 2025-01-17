const { cmd, commands } = require('../command');
const config = require('../config');
// repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there* 

> *This is Mercedes. The Forgotten Project By Marisel*
*Thanks for Choosing Mercedes* 
> *Don't forget to frok the repo*
https://github.com/betingrich3/Mercedes/fork
> *Get Session Id Here*
https://mariselli-670be7f4b6c5.herokuapp.com/
> *Alternatively Use Pair,Pair2 to get session*
eg; .pair 25474000......
`;

        await conn.sendMessage(from, { image: { url: `https://i.ibb.co/syqdrcp/mrfrankofc.jpg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363299029326322@newsletter', newsletterName: 'JawadTechX', serverMessageId: 143 } } }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

