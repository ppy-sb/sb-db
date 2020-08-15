const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
    user: { _id: { type: mongoose.Types.ObjectId, index: true, required: true } },
    target: { _id: { type: mongoose.Types.ObjectId, index: true, required: true } },
})