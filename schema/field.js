const { gql } = require('apollo-server');

const field = gql`
    type Field{
        id: String
        name: String!
        owner: User!
    }
    extend type Query {
        field(name: String!): Field
        fields(owner: String!): [Field]
    }
    extend type Mutation {
        doSomeStuff: String
    }
`;

module.exports = field;
