
// The method exported here sets the context for all resolvers and refreshes tokens
module.exports = async ({ req, res }) => {
    if (req.body.opertionName === 'login'
    || req.body.operationName === 'register') {
        return ({ req, res })
    }
    const token = req.headers.authorization

    if (!token) {
        return ({ req, res })
    }
    try {
        const {id} = decodeToken(token)
        const user = await user.query().findById(id)
        return ({
            req, res, user,
        })
    } catch (err) {
        return ({
            req, res
        })
    }
}
