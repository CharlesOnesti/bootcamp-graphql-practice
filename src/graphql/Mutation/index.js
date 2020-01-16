const merge = require('lodash.merge')
const Book = require('./Book')
const Author = require('./Author')
const Address = require('./Address')

const resolvers = [Book, Author, Address]

module.exports = merge(...resolvers)
