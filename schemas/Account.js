const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    user: { _id: mongoose.Types.ObjectId },
    password: String,
})