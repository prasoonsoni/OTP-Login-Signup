const otpController = require('../controllers/otpController')
const express = require('express')
const router = express.Router()

router.post('/', otpController.sendOtp)

module.exports = router