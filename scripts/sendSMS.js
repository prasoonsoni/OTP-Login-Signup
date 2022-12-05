const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = require('../constants/env')
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
const getSMS = require('../templates/sms')

const sendSms = async (to, otp) => {
    try {
        const smsOptions = {
            body: getSMS(otp),
            from: TWILIO_PHONE_NUMBER,
            to: "+91"+to
        }
        const info = await client.messages.create(smsOptions)
        return info
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendSms