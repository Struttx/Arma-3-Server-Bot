const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const Gamedig = require('gamedig');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
const serv  = require ('./classDef');
const serverHandler = require('./serverClasses');





// Log the AdminList to verify


const roleMention = `<@&${1197760552760528936}>`;

const targetChannelId = '1197737504657395772';
const secretChannelId = '1197743672805052536';

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const channel = await client.channels.fetch(targetChannelId);
  if (!channel) return console.error('Channel not found');

  while(i < )

  setInterval(() => checkServerAndUpdate(RDMEU), 10000); // 1 minute interval
  setInterval(() => checkServerAndUpdate(RDMUS), 10000);
  setInterval(() => checkServerAndUpdate(ANZUS), 10000);
});

async function checkServerAndUpdate(s) {
  try {
    const server = await Gamedig.query({
      type: 'arma3',
      host: s.address,
      port: s.port
    });

    const populationMessage = `${server.players.length} / ${server.maxplayers}`;
    const serverName = server.name;
    const rdmLogo = './logos/rdm.png';
    const anzusLogo = './logos/anzus.png';

    let embed;
    if (s === RDMEU || s === RDMUS) {
      embed = new EmbedBuilder()
        .setTitle(serverName)
        .setDescription(populationMessage)
        .setColor(0xff0404)
        .setThumbnail(rdmLogo);
    } else {
      embed = new EmbedBuilder()
        .setTitle(serverName)
        .setDescription(populationMessage)
        .setColor(0xff0404)
        .setThumbnail(anzusLogo);
        if(server.players.length >= 3)
        {
          channel.send(roleMention);
        }
    }

    let adminFooter = '';
    
    const channel = await client.channels.fetch(targetChannelId);

    if (s.lastMessageId) {
      try {
        const oldMessage = await channel.messages.fetch(s.lastMessageId);
        await oldMessage.edit({ embeds: [embed] });
      } catch (error) {
        // If the message is not found or another error occurs, send a new message instead
        console.error('Error editing the old message, sending a new one:', error);
        const sentMessage = await channel.send({ embeds: [embed] });
        s.lastMessageId = sentMessage.id;
      }
    } else {
      const sentMessage = await channel.send({ embeds: [embed] });
      s.lastMessageId = sentMessage.id;
    }
  } catch (error) {
    console.error('Error querying the Arma 3 server:', error);
  }
}
