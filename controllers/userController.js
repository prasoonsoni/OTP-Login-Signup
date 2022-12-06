const { OTP_EXPIRED_ERROR, SERVER_ERROR, USERNAME_EXISTS_ERROR, EMAIL_EXISTS_ERROR, PHONE_EXISTS_ERROR, ACCOUNT_CREATION_ERROR, ACCOUNT_CREATION_SUCCESS } = require('../constants/response')
const OTP = require('../models/OTP')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const createUser = async (req, res) => {
    try {
        const { name, username, phone, email, password } = req.body
        const user_username = await User.findOne({ username })
        if (user_username) {
            return res.json({ success: false, message: USERNAME_EXISTS_ERROR })
        }
        const user_phone = await User.findOne({ phone })
        if (user_phone) {
            return res.json({ success: false, message: PHONE_EXISTS_ERROR })
        }
        const user_email = await User.findOne({ email })
        if (user_email) {
            return res.json({ success: false, message: EMAIL_EXISTS_ERROR })
        }
        const salt = await bcrypt.genSalt(10)
        const securedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            name,
            email,
            phone,
            username,
            password: securedPassword
        })
        if (!user) {
            return res.json({ success: false, message: ACCOUNT_CREATION_ERROR })
        }
        res.json({ success: true, message: ACCOUNT_CREATION_SUCCESS })
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: SERVER_ERROR })
    }
}

module.exports = { createUser }