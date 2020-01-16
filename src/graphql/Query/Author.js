const Book = require('../../models/Book.js')
const Publisher = require('../../models/Publisher.js')
const Author = require('../../models/Author.js')
const Address = require('../../models/Address.js')

const allAuthors = async () => {
    const author = await Author.query()
    return author
}
const author = async (obj, {authorId}) => {
    const a = await Author.query().findById(authorId)
    return a
}

const address = async ({addressId}) => {
    const ad = await Address.query().findById(addressId)
    console.log(ad)
    return ad
}

const resolver = {
    Query: {
        authors: allAuthors,
        author: author,
    },
    Author: {
        address,
    },
}
module.exports = resolver