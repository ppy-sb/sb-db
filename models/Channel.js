const schema = require('../schemas/Channel')
module.exports = (mongoose) => {
    return mongoose.model('Channel', schema, 'channels')
}