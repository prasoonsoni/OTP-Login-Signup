const nodemailer = require('nodemailer')
const getEMAIL = require('../templates/email')
const { EMAIL, PASSWORD } = require('../constants/env')
const sendMail = async (to, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })
        const mailOptions = {
            from: `Prasoon Soni 👨‍💻 <${process.env.EMAIL}>`,
            to: to,
            subject: "Do Not Reply - Your OTP",
            html: getEMAIL(otp)
        }
        const info = await transporter.sendMail(mailOptions)
        return info
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail