const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const connectToDatabase = require('./database/connection')
const PORT = process.env.PORT || 5000
connectToDatabase()
dotenv.config()
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("App Running.")
})
app.listen(PORT, () => {
    console.log(`App running at ${process.env.BASE_URL} and using port ${PORT}`)

})
