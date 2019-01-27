const error = require('./error')

module.exports = {
    Service: require('./service'),
    ApiError: error.ApiError,
    NetError: error.NetError
}
