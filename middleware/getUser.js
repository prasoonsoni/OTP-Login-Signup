const { JWT_SECRET } = require('../constants/env')
const { AUTH_TOKEN_REQUIRED, AUTH_TOKEN_INVALID } = require('../constants/response')
const jwt = require('jsonwebtoken')

const getUser = async (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.json({ success: false, message: AUTH_TOKEN_REQUIRED })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()
    } catch (error) {
        res.json({ success: false, message: AUTH_TOKEN_INVALID })
        console.log(error.message)
    }
}

module.exports = getUser