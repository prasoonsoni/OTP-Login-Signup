const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true
    },
    phone_verified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('user', UserSchema)