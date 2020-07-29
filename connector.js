const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.db.uri, { useNewUrlParser: true, autoIndex: false });

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'Connection error:'))
    db.once('open', () => console.log(`Connected to db ${config.db.uri}`))
    return db
}