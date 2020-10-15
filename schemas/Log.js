const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
    event: { type: String, required: true, index: true },
    id: { type: String, required: true, index: true },
    parameters: {type: Array, default: () => []},
    time: {type: Date, default: Date.now}
},
{ capped: { size: 4096, max: 65535, autoIndexId: true } }
)