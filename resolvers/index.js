// import the generated ones
// const { Resolvers } = require('../../types/generated');

const User = require('./user');
const Field = require('./field');

const resolvers = [User, Field];

module.exports = resolvers;
