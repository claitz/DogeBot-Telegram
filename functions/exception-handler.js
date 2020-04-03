const exceptionHandler = (ctx) => async (fn) => {
  fn(ctx).catch(e => {
    console.error('ERROR!', e);
    ctx.replyWithHTML(`Much failure:\n<b>${e.message}</b>`);
  });
};

module.exports = exceptionHandler;