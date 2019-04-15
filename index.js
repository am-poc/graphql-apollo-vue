const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs, resolvers });

// todo: auth, cors, etc
// todo: add db connection to PostGres (postgraphile most probably)
// todo: keep the PG connection code separate in the ./data/pg.js file (which is a work in progress right now)

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo GQL Server launched at ${url}`);
});
