const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {

    const token = req.headers.authorization || req.headers.Authorization
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed!' })
    }

    try {
        let newToken = token.split(" ")[1]
        jwt.verify(newToken, process.env.SECRET_JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({ message: 'Authentication failed!' })
            }
            req.user = {
                user: decode.user,
                token: newToken
            }
            return next()
        })
    } catch (error) {

    }
}

module.exports = auth