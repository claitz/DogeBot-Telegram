const superagent = require('superagent');


const twitchGetAPI = async endpoint => {
  try {
    const { body } = await superagent
      .get(`https://api.twitch.tv/kraken${endpoint}`)
      .set('Client-ID', process.env.TWITCH_TOKEN)
      .set('Accept', 'application/vnd.twitchtv.v5+json');
    return body;
  } catch (e) {
    throw new Error(`# twitchGetAPI - Error GET endpoint ${endpoint}`);
  }
};

const getTwitchUserID = async twitchUserName => {
  try {
    const twitchResponse = await twitchGetAPI(
      `/users?login=${twitchUserName}`
    );
    return twitchResponse.users[0]._id;
  } catch (e) {
    throw new Error(`# getTwitchUserID Error getting user ID for ${twitchUserName}`);
  }
};

const getTwitchStreamData = async ({ channelID, type }) => {
  try {
    return await twitchGetAPI(`/${type}/${channelID}`);
  } catch (e) {
    throw new Error(`#getTwitchStreamData Error getting ${type} for user ${channelID}`);
  }
};

module.exports = {
  twitchGetAPI,
  getTwitchUserID,
  getTwitchStreamData,
};