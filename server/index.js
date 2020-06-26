const { ApolloServer } = require('apollo-server');


const typeDefs = require('./schema');
const resolvers = require('./resolvers');
// const { createStore } = require('./utils');


const DashboardAPI = require('./datasources/dashboard');

const dataSources = () => ({
    userAPI: new DashboardAPI({ store }),
});

const context = async ({ req }) => {
    // simple auth check on every request
    const auth = (req.headers && req.headers.authorization) || '';
    const email = new Buffer(auth, 'base64').toString('ascii');

    // if the email isn't formatted validly, return null for user
    if (!isEmail.validate(email)) return { user: null };
    // find a user by their email
    const users = await store.users.findOrCreate({ where: { email } });
    const user = users && users[0] ? users[0] : null;

    return { user };
};
  
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
    introspection: true,
    playground: true,
    engine: {
      apiKey: process.env.ENGINE_API_KEY,
      ...internalEngineDemo,
    },
  });