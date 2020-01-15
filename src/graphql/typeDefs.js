const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    authors: [Author!]!
    books: [Book!]!
    publishers: [Publisher!]!
    search(input: String!): [SearchResult!]!
  }
  type mutation {
    editAuthorName(newName: string!): Author!
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
    numBooksAuthored: Int!
    books: [Book!]!
 }
  type Book {
    id: ID!
    authorId: ID!
    pulisherId: ID!
    bestseller: Boolean!
    datePublished: String!
    title: String!
    numPages: Int!
    imgUrl: String
    createdAt: String!
    updatedAt: String!
  }
  type publisher {
    id: ID!
    PublisherAddressId: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
  }
  type address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
  input CreateBookInput {
    title: String!
    imgUrl: String
    numPages: Int!
    bestseller: Boolean!
    publisherId: ID!
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
  union SearchResult = Book | Author | Publisher
`
