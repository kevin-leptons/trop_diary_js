const LOG_INFO = 0
const LOG_DEBUG = 1
const LOG_WARN = 2
const LOG_ERROR = 3
const LOG_FATAL = 4

class MessageService {
    constructor(http) {
        this._http = http
    }

    async list(filter) {
        let {data} = await this._http.get('/message', filter)
        return data
    }

    async find(id) {
        return await this._http.get('/message/item/' + id)
    }

    async info(data, label) {
        return await this._write(LOG_INFO, data, label)
    }

    async debug(data, label) {
        return await this._write(LOG_DEBUG, data, label)
    }

    async warn(data, label) {
        return await this._write(LOG_WARN, data, label)
    }

    async error(data, label) {
        return await this._write(LOG_ERROR, data, label)
    }

    async fatal(data, label) {
        return await this._write(LOG_FATAL, data, label)
    }

    // PRIVATE MEMBERS

    async _write(level, data, label) {
        let message = {
            level,
            data,
            label
        }

        let res = await this._http.post('/message', message)
        return res.data._id
    }
}

module.exports = MessageService
