module.exports = (config) => {
    const mongoose = require('./connector')(config || {db: { uri: 'mongodb://localhost/test' }})
    return {
        User: require('./models/User')(mongoose),
        Session: require('./models/Session')(mongoose),
        Channel: require('./models/Channel')(mongoose),
        Account: require('./models/Account')(mongoose),
        Stat: require('./models/Stat')(mongoose),
        Preference: require('./models/Preference')(mongoose),
        Friend: require('./models/Friend')(mongoose),
    }
}
