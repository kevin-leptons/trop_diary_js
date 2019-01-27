const fs = require('fs')

class AuthService {
    constructor(http) {
        this._http = http
    }

    get token() {
        return this._token
    }

    async create_token(conf) {
        let res = await this._http.post('/token', conf)
        return res.data
    }

    /*
    Input
        * conf / Object / {}
        * conf.role / String, one or 'r', 'w', 'rw'
    Output Object
        * type / String / 'key'
        * expires_in / integer / 0
        * access_token / String
    */
    async create_key(conf) {
        let res = await this._http.post('/key', {
            role: conf.role
        })

        return res.data
    }

    set_token(token) {
        this._http.set_auth(token)
    }

    use_key_file(file) {
        let raw = fs.readFileSync(file)
        let key = JSON.parse(raw)
        this._http.set_auth(key)
    }

    on(evt, callback) {
        if (evt === 'refresh_token') {
            this._http.on(evt, callback)
        }
    }
}

module.exports = AuthService
