const fs = require('fs');

const hears = fs
  .readdirSync(__dirname)
  .filter(f => /\.js$/.test(f) && f !== 'index.js')
  .reduce((list, hear) => ({ ...list, [hear.split('.js')[0]]: `${__dirname}/${hear}` }), {});

module.exports = hears;