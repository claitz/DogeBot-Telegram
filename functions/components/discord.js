const superagent = require('superagent');

const discordGetAPI = async endpoint => {
  try {
    const { body } = await superagent
      .get(`https://discordapp.com/api${endpoint}`)
      .set('Authorization', `Bot ${process.env.DISCORD_TOKEN}`);
    return body;
  } catch (e) {
    throw new Error(`# discordAPIRequest - Error GET ${endpoint}`);
  }
};

const getDiscordGuildData = async ({ id, type }) => {
  try {
    const result = await discordGetAPI(`/guilds/${id}/${type}.json`);
    return result;
  } catch (e) {
    // throw new Error(`# getGuildData - Error getting guild type ${type} for id ${id}`);
    throw new Error(`# getGuildData ${type} for id ${id}`);
  }
};

module.exports = {
  discordGetAPI,
  getDiscordGuildData,
};