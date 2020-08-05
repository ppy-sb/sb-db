const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    user: { _id: mongoose.Types.ObjectId, unique: true },
    language: { type: String, default: 'en' },
})