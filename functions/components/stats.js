const superagent = require('superagent');
const { cherryPick } = require('../utils');

const getCodWZStats = async ({ platform, username }) => {
  try {
    const url = `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/${platform}/gamer/${username.replace('#', '%23').replace(' ', '%20')}/profile/type/mp`;

    const { body } = await superagent.get(url);
    const { properties } = body.data.lifetime.mode.br_all;

    const codWZStats = cherryPick(properties, [
      'wins',
      'kills',
      'kdRatio',
      'down',
      'topTwentyFive',
      'topTen',
      'contracts',
      'revives',
      'topFive',
      'score',
      'timePlayed',
      'scorePerMinute',
      'cash',
      'deaths'
    ]);

    return codWZStats;
    
  } catch (e) {
    console.log(e);
    throw new Error(`piattaforme accettate [psn|xbl|battle], hai scritto "<i>${platform}</i>"`);
  }
};

module.exports = {
  getCodWZStats,
};