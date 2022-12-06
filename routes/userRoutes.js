const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.post('/verify', userController.verifyAccount)
router.post('/login', userController.loginUser)
router.post('/login/otp', userController.loginUserUsingOTP)

module.exports = router