const otpController = require('../controllers/otpController')
const express = require('express')
const router = express.Router()

router.post('/mobile', otpController.sendMobileOtp)

module.exports = router