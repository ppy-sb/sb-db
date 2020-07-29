const mongoose = require('mongoose');
const User = require('./User')
module.exports = new mongoose.Schema({
    id: { type: String, index: true },
    user: User,
    test: { type: String, index: true }
})