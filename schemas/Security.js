const mongoose = require('mongoose');
const User = require('./User')
module.exports = new mongoose.Schema({
    user: User,
    password: String,
})