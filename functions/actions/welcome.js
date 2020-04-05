const { newUser } = require('../components/fauna');
const { getUser } = require('../components/helper');

// TODO: variabilizzare su ENVVAR i messaggi

module.exports = async ctx => {
  const { id, isBot, name } = getUser(ctx.from);
  if (isBot) {
    return ctx.reply(`Much bots, vai via ${name}!`);
  } else {
    // return ctx.reply(`Wow, ${name} è un vero gamer, benvenuto doggo!`)
    try {
      let isNewUser = await newUser(id);
      if (isNewUser) {
        return ctx.reply(`Wow, ${name} si è unito, benvenuto doggo!`);
      } else {
        return ctx.reply(
          `Lmao, ${name} è tornato dopo il ragequit! Welcome back doggo.`
        );
      }
    } catch (e) {
      return ctx.reply('Wow, much error');
    }
  }
};
