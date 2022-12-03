const otpGenerator = require('otp-generator')
const generateOTP = (length)=>{
    const options = {
        upperCaseAlphabets: false, 
        lowerCaseAlphabets:false,
        specialChars: false,
        digits:true
    }
    const otp = otpGenerator.generate(length, options)
    return otp
}

module.exports = generateOTP