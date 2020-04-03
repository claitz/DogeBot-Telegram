/* eslint-disable no-unused-vars */
const Telegraf = require('telegraf');
// FIXME: netlify <3
const superagent = require('superagent');
const Keyboard = require('telegraf-keyboard');


const exceptionHandler = require('./exception-handler');
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// OHWOW MUCH EFESEN BLACK MAGIC
console.log('*********** MUCH DOGE BOTZ LOADING');
const commands = require('./events/commands');
Object.keys(commands).forEach(command => {
  const commandFn = require(commands[command]);
  bot.command(command, ctx => exceptionHandler(ctx)(commandFn));
});
console.log(`Loaded ${Object.keys(commands).length} commands (${Object.keys(commands).join(',')})`);

const hears = require('./events/hears');
Object.keys(hears).forEach(hear => {
  const hearHandler = require(hears[hear]);
  const hearFn = hearHandler.fn;
  const regexp = hearHandler.regexp;
  bot.hears(regexp, ctx => exceptionHandler(ctx)(hearFn));
});
console.log(`Loaded ${Object.keys(hears).length} hears (${Object.keys(hears).join(',')})`);
// ------------------------------------

// TODO: lanciare 'sta roba al cesso
// @efesen sarebbe figo un event handler anche qui a sto punto

const startAction = require('./actions/start');
const welcomeMessage = require('./actions/welcome');
const goodbyeMessage = require('./actions/goodbye');

// WELCOME MESSAGE
bot.on('new_chat_members', ctx => welcomeMessage(ctx));
// GOODBYE MESSAGE
bot.on('left_chat_member', ctx => goodbyeMessage(ctx));

// END TODO

bot.start(ctx => startAction(ctx));

exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: '' };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: 'This endpoint is meant for bot and telegram communication'
    };
  }
};

bot.startPolling();
