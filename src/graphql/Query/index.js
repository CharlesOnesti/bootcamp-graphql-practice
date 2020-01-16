const merge = require('lodash.merge')
const Book = require('./Book')
const Publisher = require('./Publisher')
const Author = require('./Author')

const resolvers = [Book, Publisher, Author]

module.exports = merge(...resolvers)