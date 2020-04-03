const faunadb = require('faunadb');

const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET_KEY });
const faunaQuery = faunadb.query;

const newUser = id => 
  faunaClient.query(faunaQuery.Create(faunaQuery.Collection('user'), { data: { userId: id } }));

module.exports = {
  newUser,
};
