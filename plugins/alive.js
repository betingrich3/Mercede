const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *Mercedes* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  *${runtime(process.uptime())}*
┃◈┃• *⚙️ HostName*: *${os.hostname()}*
┃◈┃• *👨‍💻 Owner*: *Marisel*
┃◈┃• *🧬 Version*: *3.0.0*
┃◈└───────────┈⊷
╰──────────────┈⊷
> *Made For You By Marisel*`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/S3WYRHV/mrfrankofc.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363299029326322@newsletter',
                    newsletterName: '𝐌𝖊𝖗𝖈𝖊𝖉𝖊𝖘',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});