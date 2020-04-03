const fs = require('fs');

const commands = fs
  .readdirSync(__dirname)
  .filter(f => /\.js$/.test(f) && f !== 'index.js')
  .reduce((list, command) => ({ ...list, [command.split('.js')[0]]: `${__dirname}/${command}` }), {});

module.exports = commands;