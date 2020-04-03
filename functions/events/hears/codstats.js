const { getCodWZStats } = require('../../components/stats');
const Keyboard = require('telegraf-keyboard');

const regexp = /(?:!codstats|!wzstats)(?:\s)(psn|xbl|battle)\s([0-9a-z?#_. ]{1,})/i;

const handler = async (ctx) => {
  const codStatsRequest = ctx.message.text;

  const codStatsResult = codStatsRequest.match(regexp);

  const codWZStats = await getCodWZStats({
    platform: codStatsResult[1],
    username: codStatsResult[2]
  });

  const options = {
    inline: true,
    duplicates: false, // default
    newline: false, // default
  };

  const keyboard = new Keyboard(options);
  const reply = `Bella doggo, ecco le stats per <b>${codStatsResult[2]}</b> 💪\n`;

  keyboard
    .add(`🏆 ${codWZStats.wins} Win 🏆`, `🏅 ${codWZStats.topFive} Top5 🏅`) // first line
    .add(`🔫 ${codWZStats.kills} Kill 🔫`, `💀 ${codWZStats.deaths} Morti 💀`) // second line
    .add(`🍪 ${codWZStats.kdRatio.toFixed(2)} K/D 🍪`, `💰 ${codWZStats.cash} Cashi 💰`); // third line
  
  ctx.replyWithHTML(reply, keyboard.draw());
};

module.exports = {
  regexp,
  fn: handler,
};