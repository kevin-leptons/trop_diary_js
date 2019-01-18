const HttpMiddleware = require('./http_middleware')
const RootService = require('./root_service')
const MessageService = require('./message_service')

class Service {
    /*
    Argument
        * conf / object / {}.
        * conf.endpoint / string / 'http://localhost:8080'. URL refers to API
          endpoint.
    */
    constructor(conf={}) {
        conf = this._read_conf(conf)

        this._http = new HttpMiddleware(conf.endpoint)
        this._root = new RootService(this._http)
        this._message = new MessageService(this._http)
    }

    get root() {
        return this._root
    }

    get message() {
        return this._message
    }

    // PRIVATE MEMBERS

    _read_conf(conf) {
        conf.endpoint = conf.endpoint || 'http://localhost:8080'
        return conf
    }
}

module.exports = Service
