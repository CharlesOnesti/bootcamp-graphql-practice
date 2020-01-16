const Book = require('../../models/Book.js')
const Publisher = require('../../models/Publisher.js')
const Author = require('../../models/Author.js')

const allBooks = async () => {
    const books = await Book.query()
    return books
}

const book = async (obj, {bookId}) => {
    const b = await Book.query().findById(bookId)
    return b
}

const publisher = async ({publisherId}) => {
    const p = await Publisher.query().findById(publisherId)
    return p
}

const author = async ({authorId}) => {
    const a = await Author.query().findById(authorId)
    return a
}

const resolver = {
    Query: {
        books: allBooks,
        book: book,
    },
    Book: {
        author,
        publisher,
    },
}

module.exports = resolver