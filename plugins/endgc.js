const config = require('../config')
const { cmd, commands } = require('../command')
  
cmd({
    pattern: "endgc",
    alias: ["kickall","endgroup"],
    desc: "Remove all members from the group.",
    react: "😒",
    category: "group",
    filename: __filename,
},           
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
      if (!isAdmins) return reply(`Only admins can use this command!`);
      if (!isOwner) return reply(`> *You're Not Marisel*`);

        if (!isGroup) return reply(`This command is only for groups.`);
        
        if (!isBotAdmins) return reply(`I need to be an admin to use this command.`);

        const allParticipants = groupMetadata.participants;

        const nonAdminParticipants = allParticipants.filter(member => !groupAdmins.includes(member.id));
        if (nonAdminParticipants.length === 0) {
            return reply('There are no members to remove.');
        }

        for (let participant of nonAdminParticipants) {
            await conn.groupParticipantsUpdate(m.chat, [participant.id], "remove");
        }

        reply(`Successfully removed all members.`);
        
    } catch (e) {
        console.error('Error kicking users:', e);
        reply('An error occurred while trying to kick all members. Please try again.');
    }
});