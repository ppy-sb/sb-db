const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String, unique: true },
    nick: { type: String, unique: true },
})

schema.methods.check = async (name, password) => {
    const user = await mongoose.model('User').findOne({name}).exec()
    if(!user) return
    if(!await mongoose.model('Account').exists({ user:{ _id: user._id }, password })) return
    return user
}

module.exports = schema