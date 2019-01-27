const axios = require('axios')

const {ApiError, NetError} = require('./error')

class HttpService {
    constructor(endpoint) {
        this._axios = axios.create({
            baseURL: endpoint
        })
    }

    set_auth_header(value) {
        this._axios.defaults.headers.common['Authorization'] = value
    }

    async get(path, params) {
        return await this._request('get', path, params)
    }

    async post(path, data) {
        return await this._request('post', path, undefined, data)
    }

    async put(path, data) {
        return await this._request('put', path, undefined, data)
    }

    async patch(path, data) {
        return await this._request('patch', path, undefined, data)
    }

    async delete(path) {
        return await this._request('delete', path)
    }

    // PRIVATE METHODS

    async _request(method, path, params, data) {
        try {
            return await this._axios({
                method: method,
                url: path,
                params: params,
                data: data
            })
        } catch (e) {
            if (e instanceof Error) {
                if (e.hasOwnProperty('errno')) {
                    throw new NetError(e)
                } else if (e.hasOwnProperty('response')) {
                    throw new ApiError(e.response.status, e.response.data)
                }
            }

            throw e
        }
    }
}

module.exports = HttpService
