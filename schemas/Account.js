const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    account: String,
    password: String,
    user: { _id: mongoose.Types.ObjectId },
})