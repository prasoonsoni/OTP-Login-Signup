const OTP = require('../models/OTP')
const sendSms = require('../scripts/sendSms')
const sendEmail = require('../scripts/sendEmail')
const generateOTP = require('../scripts/generateOTP')

const sendOtp = async (req, res) => {
    try {
        const { user, type } = req.body
        const otpPresent = await OTP.findOne({ user: user, type: type })
        if (otpPresent) {
            if (type === "phone") {
                const sms = await sendSms(user, otpPresent.otp)
                if (sms.body) {
                    return res.json({ success: true, message: "OTP Sent Successfully" })
                }
            }
            if (type === "email") {
                const email = await sendEmail(user, otpPresent.otp)
                if (email.response) {
                    return res.json({ success: true, message: "OTP Sent Successfully" })
                }
            }
            return res.json({ success: false, message: "Error sending OTP" })
        }
        const otp = await OTP.create({
            user: user,
            type: type,
            otp: generateOTP(4)
        })
        if (!otp) {
            res.json({ sucess: false, message: "Error sending OTP" })
        }
        if (type === "phone") {
            const sms = await sendSms(user, otp.otp)
            if (!sms.body) {
                return res.json({ success: true, message: "Error Sending OTP" })
            }
        }
        if (type === "email") {
            const email = await sendEmail(user, otp.otp)
            if (!email.response) {
                return res.json({ success: true, message: "Error Sending OTP" })
            }
        }
        res.json({ success: true, message: "OTP Sent Successfully" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Internal Server Error Occured" })
    }
}

module.exports = { sendOtp }