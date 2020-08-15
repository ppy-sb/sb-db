const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String, unique: true },
    email: {
        address: { type: String },
        verified: { type: Boolean, default: false }
    },
    punishment: {
        ban: {
            activate: { type: Boolean, default: false },
            from: { type: Date, default: Date.now },
            to: { type: Date }
        },
        restrict: {
            activate: { type: Boolean, default: false },
            from: { type: Date, default: Date.now },
            to: { type: Date }
        },
        silence: {
            activate: { type: Boolean, default: false },
            from: { type: Date, default: Date.now },
            to: { type: Date }
        },
    },
    roles: [{
        role: { type: String, required: true },
        from: { type: Date, default: Date.now },
        to: { type: Date }
    }],

    nick: { //aka from ripple
        name: { type: String, unique: true, index: true },
        from: { type: Date, required: false, default: Date.nownic },
        to: { type: Date, required: false },
        active: { type: Boolean, required: true, default: false }
    },
    historicalNicknames: [{ //history of akas
        name: { type: String, required: true },
        from: { type: Date, required: true },
        to: { type: Date, required: true },
    }]
})