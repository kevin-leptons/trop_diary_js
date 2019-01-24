class KeyService {
    constructor(http) {
        this._http = http
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
    async create(conf) {
        let res = await this._http.post('/key', {
            role: conf.role
        })

        return res.data
    }
}

module.exports = KeyService
