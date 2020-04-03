const getUser = info => {
  const {
    id,
    is_bot: isBot,
    first_name: firstName,
    last_name: lastName
  } = info;
  // eslint-disable-next-line no-unused-vars
  const fullName = `${firstName} ${lastName}`.trim();
  const name = `${firstName}`.trim();

  return { id, isBot, name };
};

module.exports = {
  getUser,
};
