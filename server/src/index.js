const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const MockAPI = require('./datasources/dashboard');
const resolvers = require('./resolvers');

const corsOptions = {
    origin: "*",
    credentials: true
  };

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground: true,
    introspection:  true,
    cors: corsOptions,
    context: async ({ req }) => {
        let headers = {headers: req.headers}
        if(req.headers.authorization){
            let token = req.headers.authorization;
            const user = (token != 'null' || null) ? await getUser(token) : null;
            return user ? { headers,token, user } : { headers,token };
        }else{
            return {headers};
        }
    },
    dataSources: () => ({
        mockAPI: new MockAPI()
    })
});

const port = process.env.PORT || 3001;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});