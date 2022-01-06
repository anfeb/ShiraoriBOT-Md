const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Anfebn;;;'
                    + 'FN:Anfebn\n' // full name
                    + 'ORG:Anfebn;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6287773973701:+62 877-7397-3701\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Anfebn', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
