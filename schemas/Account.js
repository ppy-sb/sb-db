const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    account: String,
    password: String,
    user: { _id: { type: mongoose.Types.ObjectId, required: true, index: true } },
})