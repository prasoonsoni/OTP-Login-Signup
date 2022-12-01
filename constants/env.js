require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const BASE_URL = process.env.BASE_URL
const PORT = process.env.PORT || 5000
module.exports = { MONGO_URI, BASE_URL, PORT }