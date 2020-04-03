const { getTwitchUserID } = require('../functions/bot/components/twitch');

const muchlulz = async () => {
  const foobar = await getTwitchUserID('fusionfsn');
  console.log(foobar);
};

muchlulz();
