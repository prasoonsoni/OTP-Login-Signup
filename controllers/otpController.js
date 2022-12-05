const OTP = require('../models/OTP')
const sendSms = require('../scripts/sendSms')
const sendEmail = require('../scripts/sendEmail')
const generateOTP = require('../scripts/generateOTP')
const { SERVER_ERROR, OTP_SUCCESS, OTP_ERROR } = require('../constants/response')

const sendOtp = async (req, res) => {
    try {
        const { user, type } = req.body
        const otpPresent = await OTP.findOne({ user: user, type: type })
        if (otpPresent) {
            if (type === "phone") {
                const sms = await sendSms(user, otpPresent.otp)
                if (sms.body) {
                    return res.json({ success: true, message: OTP_SUCCESS })
                }
            }
            if (type === "email") {
                const email = await sendEmail(user, otpPresent.otp)
                if (email.response) {
                    return res.json({ success: true, message: OTP_SUCCESS })
                }
            }
            return res.json({ success: false, message: OTP_ERROR })
        }
        const otp = await OTP.create({
            user: user,
            type: type,
            otp: generateOTP(4)
        })
        if (!otp) {
            res.json({ sucess: false, message: OTP_ERROR })
        }
        if (type === "phone") {
            const sms = await sendSms(user, otp.otp)
            if (!sms.body) {
                return res.json({ success: true, message: OTP_ERROR })
            }
        }
        if (type === "email") {
            const email = await sendEmail(user, otp.otp)
            if (!email.response) {
                return res.json({ success: true, message: OTP_ERROR })
            }
        }
        res.json({ success: true, message: OTP_SUCCESS })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: SERVER_ERROR })
    }
}

module.exports = { sendOtp }