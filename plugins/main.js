const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🏆",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────
┃★│ Owner : *${config.OWNER_NAME}*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Heroku*
┃★│ Mode : *[${config.MODE}]*
┃★│ Prifix : *[${config.PREFIX}]*
┃★│ Version : *3.0.0*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Download Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *facebook*
┃◈┃• *mediafire*
┃◈┃• *tiktok*
┃◈┃• *twitter*
┃◈┃• *Insta*
┃◈┃• *apk*
┃◈┃• *img*
┃◈┃• *play*
┃◈┃• *play2*
┃◈┃• *play3*
┃◈┃• *audio*
┃◈┃• *video*
┃◈┃• *video2*
┃◈┃• *ytmp3*
┃◈┃• *ytmp4*
┃◈┃• *song*
┃◈┃• *darama*
┃◈┃• *gdrive*
┃◈┃• *smovie*
┃◈┃• *baiscope*
┃◈┃• *ginisilia*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Group Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *grouplink*
┃◈┃• *add*
┃◈┃• *remove*
┃◈┃• *kick*
┃◈┃• *promote*
┃◈┃• *demote*
┃◈┃• *dismiss*
┃◈┃• *revoke*
┃◈┃• *setgoodbye*
┃◈┃• *setwelcome*
┃◈┃• *delete*
┃◈┃• *getpic*
┃◈┃• *ginfo*
┃◈┃• *delete*
┃◈┃• *disappear on*
┃◈┃• *disappear off*
┃◈┃• *disappear 7D,24H*
┃◈┃• *allreq*
┃◈┃• *updategname*
┃◈┃• *updategdesc*
┃◈┃• *joinrequests*
┃◈┃• *senddm*
┃◈┃• *nikal*
┃◈┃• *mute*
┃◈┃• *unmute*
┃◈┃• *lockgc*
┃◈┃• *unlockgc*
┃◈┃• *invite*
┃◈┃• *tag*
┃◈┃• *hidetag*
┃◈┃• *tagall*
┃◈┃• *tagadmins*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *owner*
┃◈┃• *menu*
┃◈┃• *menu2*
┃◈┃• *listcmd*
┃◈┃• *allmenu*
┃◈┃• *repo*
┃◈┃• *block*
┃◈┃• *unblock*
┃◈┃• *fullpp*
┃◈┃• *setpp*
┃◈┃• *restart*
┃◈┃• *shutdown*
┃◈┃• *updatecmd*
┃◈┃• *alive*
┃◈┃• *ping*
┃◈┃• *gjid*
┃◈┃• *jid*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *insult*
┃◈┃• *hack*
┃◈┃• *joke*
┃◈┃• *hrt*
┃◈┃• *hpy*
┃◈┃• *syd*
┃◈┃• *anger*
┃◈┃• *shy*
┃◈┃• *kiss*
┃◈┃• *mon*
┃◈┃• *cunfuzed*
┃◈┃• *setpp*
┃◈┃• *hand*
┃◈┃• *nikal*
┃◈┃• *hold*
┃◈┃• *hug*
┃◈┃• *nikal*
┃◈┃• *hifi*
┃◈┃• *poke*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *sticker*
┃◈┃• *sticker2*
┃◈┃• *fancy*
┃◈┃• *take*
┃◈┃• *tomp3*
┃◈┃• *tts*
┃◈┃• *trt*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *ai*
┃◈┃• *gpt*
┃◈┃• *meta*
┃◈┃• *blackbox*
┃◈┃• *gpt4*
┃◈┃• *bing*
┃◈┃• *copilot*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *ping*
┃◈┃• *ping2*
┃◈┃• *speed*
┃◈┃• *live*
┃◈┃• *alive*
┃◈┃• *runtime*
┃◈┃• *uptime*
┃◈┃• *repo*
┃◈┃• *owner*
┃◈┃• *menu*
┃◈┃• *menu2*
┃◈┃• *restart*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *fack*
┃◈┃• *dog*
┃◈┃• *awoo*
┃◈┃• *garl*
┃◈┃• *waifu*
┃◈┃• *neko*
┃◈┃• *megnumin*
┃◈┃• *maid*
┃◈┃• *loli*
┃◈┃• *animegirl*
┃◈┃• *animegirl1*
┃◈┃• *animegirl2*
┃◈┃• *animegirl3*
┃◈┃• *animegirl4*
┃◈┃• *animegirl5*
┃◈┃• *anime1*
┃◈┃• *anime2*
┃◈┃• *anime3*
┃◈┃• *anime4*
┃◈┃• *anime5*
┃◈┃• *animenews*
┃◈┃• *foxgirl*
┃◈┃• *naruto*
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *fact*
┃◈┃• *define*
┃◈┃• *news*
┃◈┃• *movie*
┃◈┃• *weather*
┃◈┃• *srepo*
┃◈┃• *insult*
┃◈┃• *save*
┃◈┃• *wikipedia*
┃◈┃• *gpass*
┃◈┃• *githubstalk*
┃◈┃• *yts*
┃◈┃• *ytv*
┃◈└───────────┈⊷
╰──────────────┈⊷
> *${config.DESCRIPTION}*`;

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
