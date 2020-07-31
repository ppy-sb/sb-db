const schema = require('../schemas/Stat')
module.exports = (mongoose) => {
    return mongoose.model('Stat', schema, 'stats')
}