const schema = require('../schemas/Log')
module.exports = (mongoose) => {
    return mongoose.model('Log', schema, 'logs')
}