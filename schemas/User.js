const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String, unique: true },
    nick: { type: String, unique: true },
})