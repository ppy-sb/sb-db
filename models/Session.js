const schema = require('../schemas/Session')
module.exports = (mongoose) => {
    return mongoose.model('Session', schema, 'sessions')
}