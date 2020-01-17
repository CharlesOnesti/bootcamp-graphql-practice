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
    register(input: CreateAuthorInput!): Author!
    createAddress(input: CreateAddressInput!): Address!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
    numBooksPublished: Int
    address: Address
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
  input CreateAuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
  }
  input CreateAddressInput {
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
`
