require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const BASE_URL = process.env.BASE_URL
const PORT = process.env.PORT || 5000
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
module.exports = { MONGO_URI, BASE_URL, PORT, EMAIL, PASSWORD, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER }