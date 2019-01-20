class AuthService {
    constructor(http) {
        this._http = http
    }

    async create_token(conf) {
        let res = await this._http.post('/token', conf)
        return res.data
    }

    set_token(token) {
        this._http.set_token(token)
    }

    get token() {
        return this._token
    }
}

module.exports = AuthService
