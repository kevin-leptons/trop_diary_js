class AuthService {
    constructor(http) {
        this._http = http
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

    set_token(access_token) {
        this._http.set_auth_header('bearer ' + access_token)
    }

    set_key(access_token) {
        this._http.set_auth_header('key ' + access_token)
    }

    get token() {
        return this._token
    }
}

module.exports = AuthService
