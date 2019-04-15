
const { users } = require('../data');

module.exports = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find(user => user.id === args.id),
  },
  Mutation: {
    createUser: (parent, args) => {
      console.log(args);
      const user = {
        name: args.name,
        email: args.email,
        password: args.password,
      };
      users.push(user);
      return user;
    },
    deleteUser(parent, args) {
      const userIndex = users.findIndex(user => user.name === args.name);
      return (userIndex > -1 ? users.splice(userIndex, 1) : null);
    },
  },
};
