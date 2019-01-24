const HttpService = require('./http_service')
const AuthService = require('./auth_service')
const AccountService = require('./account_service')
const RootService = require('./root_service')
const MessageService = require('./message_service')
const KeyService = require('./key_service')

class Service {
    /*
    Argument
        * conf / object / {}.
        * conf.endpoint / string / 'http://localhost:8080'. URL refers to API
          endpoint.
    */
    constructor(conf={}) {
        conf = this._read_conf(conf)

        this._http = new HttpService(conf.endpoint)
        this._auth = new AuthService(this._http)
        this._account = new AccountService(this._http)
        this._root = new RootService(this._http)
        this._message = new MessageService(this._http)
        this._key = new KeyService(this._http)
    }

    get auth() {
        return this._auth
    }

    get account() {
        return this._account
    }

    get root() {
        return this._root
    }

    get message() {
        return this._message
    }

    get key() {
        return this._key
    }

    // PRIVATE MEMBERS

    _read_conf(conf) {
        conf.endpoint = conf.endpoint || 'http://localhost:8080'
        return conf
    }
}

module.exports = Service
