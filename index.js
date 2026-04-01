const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages // 👈 THIS IS IMPORTANT
  ],
  partials: ['CHANNEL'] // 👈 needed for DMs
});

client.once('ready', () => {
  console.log(Logged in as ${client.user.tag});
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  // 👇 This works for BOTH server and DM
  const text = message.content.toLowerCase();

  if (text.includes('hi') || text.includes('hello')) {
    message.reply('Hey… didn’t expect a message here 👀');
  }

  if (text.includes('money')) {
    message.reply('Depends… what exactly are you looking for?');
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
