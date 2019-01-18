const Service = require('./service')

function create_service(conf) {
    return new Service(conf)
}

module.exports = create_service
