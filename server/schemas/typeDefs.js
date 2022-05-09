const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutations {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SavedBookInput): User
        removeBook(bookId: String!): User
    }
    
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input SavedBookInput {
        authors: [String]
        title: String
        description: String
        bookId: String
        image: String
        link: String
    }
`;

module.exports = typeDefs;