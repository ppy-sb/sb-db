const schema = require('../schemas/Friend')
module.exports = (mongoose) => {
    return mongoose.model('Friend', schema, 'friends')
}