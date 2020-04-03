const { getUser } = require('../components/helper');

module.exports = async ctx => {
  const { isBot } = getUser(ctx.from);
  if (isBot) {
    return ctx.reply('Much bots, vai via!');
  }
};
