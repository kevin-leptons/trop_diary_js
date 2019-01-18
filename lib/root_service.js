class RootService {
    constructor(http) {
        this._http = http
    }

    async get() {
        let res = await this._http.get('/')
        return res.data
    }
}

module.exports = RootService
