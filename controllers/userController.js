const { LOGIN_SUCCESS, PASSWORD_ERROR, VERIFY_SUCCESS, VERIFY_ERROR, OTP_NOT_MATCH, USER_NOT_FOUND, OTP_EXPIRED_ERROR, SERVER_ERROR, USERNAME_EXISTS_ERROR, EMAIL_EXISTS_ERROR, PHONE_EXISTS_ERROR, ACCOUNT_CREATION_ERROR, ACCOUNT_CREATION_SUCCESS } = require('../constants/response')
const { JWT_SECRET } = require('../constants/env')
const OTP = require('../models/OTP')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

const verifyAccount = async (req, res) => {
    try {
        const { type, username, credential, otp, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.json({ success: false, message: USER_NOT_FOUND })
        }
        const passwordMatches = await bcrypt.compare(password, user.password)
        if (!passwordMatches) {
            return res.json({ success: false, message: PASSWORD_ERROR })
        }
        const sentOtp = await OTP.findOne({ user: credential, type })
        if (!sentOtp) {
            return res.json({ success: false, message: OTP_EXPIRED_ERROR })
        }
        if (sentOtp.otp !== otp) {
            return res.json({ success: false, message: OTP_NOT_MATCH })
        }
        if (type === "email") {
            const verifyEmail = await User.updateOne({ username }, { $set: { email_verified: true } })
            if (!verifyEmail.acknowledged) {
                return res.json({ success: false, message: VERIFY_ERROR })
            }
        }
        if (type === "phone") {
            const verifyPhone = await User.updateOne({ username }, { $set: { phone_verified: true } })
            if (!verifyPhone.acknowledged) {
                return res.json({ success: false, message: VERIFY_ERROR })
            }
        }
        res.json({ success: true, message: VERIFY_SUCCESS })
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: SERVER_ERROR })
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.json({ success: false, message: USER_NOT_FOUND })
        }
        const passwordMatches = await bcrypt.compare(password, user.password)
        if (!passwordMatches) {
            return res.json({ success: false, message: PASSWORD_ERROR })
        }
        const data = { user: { user_id: user._id } }
        const token = jwt.sign(data, JWT_SECRET)
        res.json({ success: true, message: LOGIN_SUCCESS, token: token })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: SERVER_ERROR })
    }
}
module.exports = { createUser, verifyAccount, loginUser }