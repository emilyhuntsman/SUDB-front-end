const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    read: [String],
    toread: [String],
    genres: [String]
})

module.exports = mongoose.model('User', userSchema)