class AccountService {
    constructor(http) {
        this._http = http
    }

    async list(conf) {
        let res = await this._http.get('/account', conf)
        return res.data
    }

    async create(conf) {
        let res = await this._http.post('/account', conf)
        return res.data
    }

    async change_password(conf) {
        await this._http.patch('/account/password', conf)
    }

    async change_role(conf) {
        let res = await this._http.patch('/account/role', conf)
        return res.data
    }

    async remove(email) {
        let res = await this._http.delete('/account/item/' + email)
        return res.data
    }
}

module.exports = AccountService
