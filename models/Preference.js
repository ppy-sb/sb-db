const schema = require('../schemas/Preference')
module.exports = (mongoose) => {
    return mongoose.model('Preference', schema, 'preferences')
}