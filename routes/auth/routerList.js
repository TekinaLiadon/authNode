const routerList = {
    loginUser: require('./login'),
    registration: require('./registration'),
    giveInfo: require('./info'),
    changePassword: require('./changePassword'),
    changeUsername: require('./changeUsername'),
    changeRole: require('./changeRole'),
    changeEmail: require('./changeEmail'),
    updateBlacklist: require('./blacklist'),
    addProject: require('./addProject')
}

module.exports = routerList