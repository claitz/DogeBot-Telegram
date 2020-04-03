const { getUser } = require('../components/helper');

// TODO: variabilizzare su ENVVAR i messaggi

module.exports = async ctx => {
  const { isBot, name } = getUser(ctx.from);

  if (isBot) {
    return ctx.reply(`Finalmente il bot ${name} se n'è andato <3`);
  } else {
    return ctx.reply(`Wow, che ragequit per ${name}`);
  }
};