const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    user: { _id: { type: mongoose.Types.ObjectId, unique: true } },
    mode: { type: String, required: true },
    playstyle: { type: String, required: true },
    counts: {
        300: { type: Number, default: 0 },
        100: { type: Number, default: 0 },
        50: { type: Number, default: 0 },
        miss: { type: Number, default: 0 },
        plays: { type: Number, default: 0 },
        fail: { type: Number, default: 0 },
        retries: { type: Number, default: 0 },
        SSH: { type: Number, default: 0 },
        SS: { type: Number, default: 0 },
        SH: { type: Number, default: 0 },
        S: { type: Number, default: 0 },
        A: { type: Number, default: 0 },
        B: { type: Number, default: 0 },
        C: { type: Number, default: 0 },
        D: { type: Number, default: 0 },
    },
    scores: {
        ranked: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
    },
    ppv2: {
        raw: { type: Number, default: 0 },
        rank: { type: Number, default: 0 },
        countryRank: { type: Number, default: 0 },
        accuracy: { type: Number, default: 1 },
    },
    time: {
        played: { type: Number, default: 0 },
        online: { type: Number, default: 0 },
        multi: { type: Number, default: 0 }, // @arily typo
        single: { type: Number, default: 0 },
    }
})

schema.index({ 'user._id': 1, mode: 1, playstyle: 1 }, { unique: true })

module.exports = schema