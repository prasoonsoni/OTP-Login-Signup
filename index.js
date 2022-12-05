const express = require('express')
const cors = require('cors')
const app = express()
const connectToDatabase = require('./database/connection')
const { PORT, BASE_URL } = require('./constants/env')
const otpRoutes = require('./routes/otpRoutes')

connectToDatabase()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("App Running.")
})

app.use('/otp', otpRoutes)
app.listen(PORT, () => {
    console.log(`App running at ${BASE_URL} and using port ${PORT}`)

})
