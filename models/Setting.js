const schema = require('../schemas/Setting')
module.exports = (mongoose) => {
    return mongoose.model('Setting', schema, 'settings')
}