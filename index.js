module.exports = (config) => {
    const mongoose = require('./connector')(config || {db: { uri: 'mongodb://localhost/test' }})
    return {
        User: require('./models/User')(mongoose),
        Session: require('./models/Session')(mongoose),
        Channel: require('./models/Channel')(mongoose),
        Account: require('./models/Account')(mongoose),
        Stat: require('./models/Stat')(mongoose),
        Setting: require('./models/Setting')(mongoose),
        Friends: require('./models/Friend')(mongoose),
    }
}
