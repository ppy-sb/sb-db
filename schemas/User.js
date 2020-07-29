const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    id: { type: Number, index: true },
    name: { type: String, index: true },
    password: String,
})
