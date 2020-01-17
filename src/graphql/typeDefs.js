const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    authors: [Author]!
    author(authorId: ID!): Author!
    books: [Book!]!
    book(bookId: ID!): Book!
    publishers: [Publisher!]!
    publisher(publisherId: ID!): Publisher!
  }
  type Mutation {
    createBook(input: CreateBookInput!): Book!
    deleteBook(bookId: ID!): Book!
    register(email: String!, password: String!): UserAuth!
    login(email: String!, password: String!): UserAuth!
    createAddress(input: CreateAddressInput!): Address!
  }
  type Author {
    id: ID!
    password: String!
    firstName: String
    lastName: String
    email: String!
    age: Int
    numBooksPublished: Int
    address: Address
 }
  type UserAuth {
    token: String!
    user: Author!
  }
  type Book {
    id: ID!
    language: String!
    author: Author!
    publisher: Publisher!
    bestseller: Boolean
    datePublished: String
    title: String!
    numPages: Int
    createdAt: String
    updatedAt: String
  }
  type Publisher {
    id: ID!
    address: Address!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
  input CreateBookInput {
    title: String!
    numPages: Int
    language: String!
    bestseller: Boolean
    publisherId: ID!
    authorId: ID!
  }
  input CreateAddressInput {
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
`
