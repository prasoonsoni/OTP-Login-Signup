const mongoose = require('mongoose')
const { Schema } = mongoose

let OtpSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ["email", "phone"],
        required: true
    },
    otp: {
        type: String,
        required: true,
    }
}, { timestamps: true })
OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });
module.exports = mongoose.model('otp', OtpSchema)