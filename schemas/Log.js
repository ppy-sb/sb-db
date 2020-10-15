const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
    event: { type: String, required: true, index: true },
    id: { type: String, required: true, index: true },
    parameters: {type: Array, default: () => []}
})