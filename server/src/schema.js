const { gql } = require('apollo-server');


const typeDefs = `
    type UserType {
        id: ID!
        username: String!
        avatar: String!
    }

    scalar Date

    type PostType {
        id: ID!
        user: UserType!
        body: String
        image: String
        comment: [CommentType]
        reaction: [ReactionType]
        createdDate: Date
    }

    type CommentType {
        id: ID!
        body: String
        createdDate: Date
        user: UserType!
    }

    type ReactionType {
        id: ID!
        like: Int
        love: Int
        celebration: Int
        insightful: Int
        user: UserType!
        createdDate: Date
    }

    type Query {
        dashboard(id: String): [PostType]!
    } 
`;

module.exports = typeDefs;