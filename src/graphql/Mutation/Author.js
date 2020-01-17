const Book = require('../../models/Book.js')
const Publisher = require('../../models/Publisher.js')
const Author = require('../../models/Author.js')
const {hashPassword, comparePassword, createToken} = require('../../lib/auth.js')



const register = async (obj,{email, password}) => {
    const emailExists = await Author.query().findOne({ email })
    if(emailExists) {
        throw new Error('Email is already in use')
    }
    const passwordHash = await hashPassword(password)

    const user = await Author.query().insertAndFetch({
        email,
        password: passwordHash
    })
    const payload = {
        id: user.id,
    }
    const token = createToken(payload)
    return { token, user }
}
const login = async (obj,{email, password}) => {
    const user = await Author.query().findOne({
        email,
    })
    if (!user) {
        throw new Error('invalid email or password.')
    }
    const isValidPassword = await comparePassword(password, user.password)
    if (!isValidPassword) {
        throw new Error('invalid username or password.')
    }

    const payload = {
        id: user.id,
    }
    const token = createToken(payload)
    return { token, user }
}

const resolver = {
    Mutation: {
        register,
        login,
    },
}
module.exports = resolver