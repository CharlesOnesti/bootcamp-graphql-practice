const Book = require('../../models/Book.js')
const Publisher = require('../../models/Publisher.js')
const Author = require('../../models/Author.js')

const createBook = async (obj,{input}) => {
    const books = await Book.query().insert(input)
    return books
}

const deleteBook = async ({bookId}) => {
    const b = await (await Book.query().findById(bookId)).delete()
    return b
}

const resolver = {
    Mutation: {
        createBook,
        deleteBook,
    },
}

module.exports = resolver