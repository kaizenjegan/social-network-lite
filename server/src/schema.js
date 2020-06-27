const { gql } = require('apollo-server');


const typeDefs = `
    type Dashboard {
        id: ID!
        body: String
    }

    type Query {
        dashboard(id: String): Dashboard!
    } 
`;

module.exports = typeDefs;