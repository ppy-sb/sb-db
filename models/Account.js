const schema = require('../schemas/Account')
module.exports = (mongoose) => {
    return mongoose.model('Account', schema, 'accounts')
}