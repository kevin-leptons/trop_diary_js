const axios = require('axios')

const {ApiError, NetError} = require('./error')

class HttpService {
    constructor(endpoint) {
        this._axios = axios.create({
            baseURL: endpoint
        })
        this._events = {}
    }

    set_auth(token) {
        this._token = token
        let auth_header = token.type + ' ' + token.access_token
        this._axios.defaults.headers.common['Authorization'] = auth_header
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

    on(evt, callback) {
        this._events[evt] = callback
    }

    // PRIVATE METHODS

    async _request(method, path, params, data) {
        try {
            return await this._raw_request(method, path, params, data)
        } catch (e) {
            if (!e instanceof ApiError || e.status !== 401) {
                throw e
            }
            if (method === 'post' && path === '/token') {
                throw e
            }
            if (!this._token.refresh_token || this._token.type !== 'bearer') {
                throw e
            }
            if (!this._events['refresh_token']) {
                throw e
            }
        }

        await this._refresh_token()
        return this._raw_request(method, path, params, data)
    }

    async _refresh_token() {
        let res = await this._raw_request('post', '/token', null, {
            grant_type: 'refresh_token',
            refresh_token: this._token.refresh_token
        })
        this.set_auth(res.data)
        this._events['refresh_token'](undefined, res.data)
    }

    async _raw_request(method, path, params, data) {
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
