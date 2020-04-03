const Keyboard = require('telegraf-keyboard');

module.exports = async ctx => {

  // TEST MENU
  const options = {
    inline: true,
    duplicates: false, // default
    newline: false, // default
  };

  const keyboard = new Keyboard(options);
  keyboard
    .add('Item 1', 'Item 2', 'Item 3') // first line
    .add('Item 10'); // second line
  ctx.reply('Keyboard', keyboard.draw());
};