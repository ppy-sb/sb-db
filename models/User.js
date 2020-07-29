const schema = require('../schemas/User')
module.exports = (mongoose) => {
    return mongoose.model('User', schema, 'users')
}