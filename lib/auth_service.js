class AuthService {
    constructor(http) {
        this._http = http
    }

    async get_token(email, password) {
        let res = await this._http.post('/token', {
            email: email,
            password: password
        })
        return res.data
    }
}

module.exports = AuthService
