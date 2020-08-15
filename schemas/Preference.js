const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    user: { _id: { type: mongoose.Types.ObjectId, unique: true, index: true } },
    language: { type: String, default: 'en' },
})