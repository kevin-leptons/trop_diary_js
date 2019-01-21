const axios = require('axios')

class HttpMiddleware {
    constructor(endpoint) {
        this._axios = axios.create({
            baseURL: endpoint
        })
    }

    set_token(token) {
        this._token = token
        let auth_header = 'Bearer ' + token.access_token
        this._axios.defaults.headers.common['Authorization'] = auth_header
    }

    async get(path, data) {
        return await this._axios.get(path, data)
    }

    async post(path, data) {
        return await this._axios.post(path, data)
    }

    async put(path, data) {
        return await this._axios.put(path, data)
    }

    async patch(path, data) {
        return await this._axios.patch(path, data)
    }

    async delete(path) {
        return await this._axios.delete(path)
    }
}

module.exports = HttpMiddleware
