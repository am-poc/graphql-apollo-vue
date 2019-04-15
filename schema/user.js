// custom type User
const { gql } = require('apollo-server');

const user = gql`
    type User {
        id: String      # make this an auto-increment ID!
        name: String!
        password: String
        email: String
    }
    extend type Query{
        users: [User]
        user(name: String!): User
    }
    extend type Mutation{
        createUser(name: String!, email: String!, password: String!): User
        deleteUser(name: String!): User
    }
`;

module.exports = user;
