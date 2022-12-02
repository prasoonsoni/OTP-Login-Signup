const mongoose = require('mongoose')
const { Schema } = mongoose
const otpGenerator = require('otp-generator')

let OtpSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique:true
    },
    type: {
        type: String,
        enum: ["email", "phone"],
        required: true
    },
    otp: {
        type: String,
        required: true,
        default: otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })
    }
}, {
    timestamps: true
})
OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });
module.exports = mongoose.model('otp', OtpSchema)