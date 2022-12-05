const OTP = require('../models/OTP')
const sendSms = require('../scripts/sendSms')
const generateOTP = require('../scripts/generateOTP')

const sendMobileOtp = async (req, res) => {
    try {
        const { user, type } = req.body
        const otpPresent = await OTP.findOne({ user: user, type: type })
        if (otpPresent) {
            const sms = await sendSms(user, otpPresent.otp)
            if (sms.body) {
                return res.json({ success: true, message: "OTP Sent Successfully" })
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
        const sms = await sendSms(user, otp.otp)
        console.log(sms)
        res.json({ success: true, message: "OTP Sent Successfully" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Internal Server Error Occured" })
    }
}

module.exports = { sendMobileOtp }