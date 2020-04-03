const { getDiscordGuildData } = require('../../components/discord');
const Extra = require('telegraf/extra');

module.exports = async ctx => {
  const guild = await getDiscordGuildData({
    id: '402916655329443850',
    type: 'widget'
  });
  // FIXME: THIS SHIT
  // const link = `https://discordapp.com/invite/${process.env.DISCORD_INVITE}`;
  const link = 'https://discordapp.com/invite/SgxFMqW';

  const reply = `<b>Discord:</b> ${link}\n<b>Doggos online:</b> ${guild.presence_count}`;

  ctx.replyWithHTML(
    reply,
    Extra.HTML().markup(m =>
      m.inlineKeyboard([
        [{ text: `🔊 Unisciti a ${guild.presence_count} doggos su Discord 🔊`, url: link}]
      ])
    )
  );
};