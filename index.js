module.exports = (config) => {
    const mongoose = require('./connector')(config)
    return {
        User: require('./models/User')(mongoose),
        Session: require('./models/Session')(mongoose),
        Channel: require('./models/Channel')(mongoose),
    }
}
