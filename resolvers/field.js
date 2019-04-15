
const { fields } = require('../data');

module.exports = {
  Query: {
    field: (parent, args) => fields.find(field => field.name === args.name),
    fields: (parent, args) => fields.find(field => field.owner.name === args.owner),
  },
  Mutation: {
    doSomeStuff: (parent, args) => {
      console.log('do some stuff');
      return 'Did some Stuff to Field';
    },
  },
};
