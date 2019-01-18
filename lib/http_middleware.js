const axios = require('axios')

class HttpMiddleware {
    constructor(endpoint) {
        this._endpoint = endpoint
    }

    async get(path) {
        return await axios.get(this._url(path))
    }

    async post(path, data) {
        return await axios.post(this._url(path), data)
    }

    async put(path, data) {
        return await axios.put(this._url(path), data)
    }

    async patch(path, data) {
        return await axios.patch(this._url(path), data)
    }

    async delete(path) {
        return await axios.delete(this._url(path))
    }

    // PRIVATE MEMBERS

    _url(path) {
        return this._endpoint + path
    }
}

module.exports = HttpMiddleware
