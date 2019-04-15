// This is the GraphQL API schema
const { gql } = require('apollo-server');
const user = require('./user');
const field = require('./field');

// the base types to be extended by each custom type
const baseTypes = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type Subscription {
        _: Boolean
    }
`;

const schema = [baseTypes, user, field];
module.exports = schema;
