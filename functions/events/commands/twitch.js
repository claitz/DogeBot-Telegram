const Extra = require('telegraf/extra');

module.exports = async ctx => {
  ctx.reply(
    'Segui gli streamers del clan sul canale ufficiale',
    Extra.HTML().markup(m =>
      m.inlineKeyboard([
        [{ text: '📺 Twitch 📺', url: 'https://www.twitch.tv/d0ge_clan' }]
      ])
    )
  );
};
