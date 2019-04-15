const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs, resolvers });

// todo: auth, cors, etc

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo GQL Server launched at ${url}`);
});
