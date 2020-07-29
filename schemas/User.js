const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    id: { type: Number, index: true },
    username: { type: String, index: true },
    password: String,
})
