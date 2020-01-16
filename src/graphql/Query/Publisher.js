const Book = require('../../models/Book.js')
const Publisher = require('../../models/Publisher.js')
const Author = require('../../models/Author.js')
const Address = require('../../models/Address.js')

const allPublishers = async () => {
    const publisher = await Publisher.query()
    return publisher
}
const publisher = async (obj, {publisherId}) => {
    const p = await Publisher.query().findById(publisherId)
    return p
}

const address = async ({addressId}) => {
    const ad = await Address.query().findById(addressId)
    return ad
}

const resolver = {
    Query: {
        publishers: allPublishers,
        publisher: publisher,
    },
    Publisher: {
        address,
    },
}
module.exports = resolver