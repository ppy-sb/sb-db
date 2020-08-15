const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    description: String,
})