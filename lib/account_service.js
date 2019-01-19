class AccountService {
    constructor(http) {
        this._http = http
    }

    async create(email, password, role) {
        let res = await this._http.post('/account', {
            email: email,
            password: password,
            role: role
        })
        return res.data
    }
}

module.exports = AccountService
