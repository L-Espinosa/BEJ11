const jwt = require("jsonwebtoken")

const authentication = (request, response, next) => {
    const [_, token] = request.headers.authorization.split(" ")

    try {
        var tokenVerified = jwt.verify(token, process.env.HASH_SECRET)
        next()
    } catch(error) {
        response.status(401)
        response.json({ error: "NotAuthenticated" })
    }
}

module.exports = authentication