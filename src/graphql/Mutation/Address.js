const Book = require('../../models/Book.js')
const Publisher = require('../../models/Publisher.js')
const Author = require('../../models/Author.js')
const Address = require('../../models/Address.js')

const createAddress = async ({input}) => {
    const author = await Author.query().insert(input)
    return author
}

const resolver = {
    Mutation: {
        createAddress: createAddress,
    },
}
module.exports = resolver