const db = require('./index')({
    db: {
        uri: process.env.DB_URI
    },
    useUnifiedTopology: true,
})

const {
    User,
    Session,
    Channel,
    Account,
    Stat,
    Preference,
    Friends
} = db;

(async function () {
    // user
    const [user, user2] = await User.insertMany([{
        id: (Math.random() * 1000).toFixed(0),
        name: 'arily',
        email: {
            address: 'example@example.com',
            verified: true,
        },
        roles: [{
            role: 'Owner',
        }],

        nick: {
            name: '阿日',
            active: true
        },

    }, {
        id: (Math.random() * 1000).toFixed(0),
        name: 'ylira',
        email: {
            address: 'example@example.com',
            verified: true,
        },
        nick: {
            name: '日啊',
            active: false
        }
    }])
    console.log('2 test user created');

    // account & settings(?)
    [user, user2].map(user => {
        const password = 'password'
        Account.insertMany([{
            account: user.id,
            password,
            user
        }, {
            account: user._id,
            password,
            user
        }, (() => {
        }, {
            account: user.name,
            password,
            user
        }, (() => {
            if (user.nick && user.nick.active) return ({
                account: user.nick.name,
                password,
                user
            })
        })()].filter(r => r)).then(res => console.log('accounts created for user', user.name))

        // settings
        new Preference({
            user,
        }).save().then(r => console.log('preference for user', user.name, 'created'))

    })

    // stats
    const modeStatsFactory = (user) => ['osu', 'taiko', 'catch', 'mania'].reduce((acc, mode) => {
        ['default', 'relax', 'auto-pilot', 'auto'].map(playstyle => {
            if (mode == 'taiko' && playstyle == 'auto-pilot') return
            if (mode == 'catch' && playstyle == 'auto-pilot') return
            if (mode == 'mania' && playstyle == 'relax') return
            if (mode == 'mania' && playstyle == 'auto-pilot') return

            acc.push({
                user,
                mode,
                playstyle
            })
        })
        return acc
    }, [])

    Stat.insertMany([...modeStatsFactory(user), ...modeStatsFactory(user2)]).then(res => console.log('mode-playstyle stats created'))

    // frineds
    Friends.insertMany([{
        user,
        target: user2
    }, {
        user: user2,
        target: user
    }]).then(res => console.log('set mutual friends for', user.name, 'and', user2.name))

    // channels
    Channel.insertMany([{
        name: 'osu',
        description: 'default channel for everyone'
    }, {
        name: 'lobby',
        description: 'channel to find and announce multiplay sessions'
    }, {
        name: 'bot-spam',
        description: 'chat(spamming) with bot but want public-viewable? do it here.'
    }])
})()
