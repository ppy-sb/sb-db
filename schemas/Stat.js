const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
    user: { _id: mongoose.Types.ObjectId },
    counts: {
        300: Number,
        100: Number,
        50: Number,
        miss: Number,
        plays: Number,
        fail: Number,
        retries: Number,
        SSH: Number,
        SS: Number,
        SH: Number,
        S: Number,
        A: Number,
        B: Number,
        C: Number,
        D: Number,
    },
    scores: {
        ranked: Number,
        total: Number,
    },
    ppv2: {
        raw: Number,
        rank: Number,
        countryRank: Number,
        accuracy: Number,
    },
    time: {
        played: Number,
        online: Number,
        muti: Number,
        single: Number,
    }
})