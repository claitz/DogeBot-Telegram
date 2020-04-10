const handler = async (ctx) => {
  ctx.reply('I heard... TEST something!');
};

module.exports = {
  regexp: /^!test (.+)/i,
  fn: handler,
};