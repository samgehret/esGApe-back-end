const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
})

mongoose.model('User', UserSchema)
// should this be like the other models?
module.exports = mongoose