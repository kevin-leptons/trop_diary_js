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
        let res = await this._http.get('/message', filter)
        return res.data
    }

    async find(id) {
        let res = await this._http.get('/message/item/' + id)
        return res.data
    }

    async info(message, label=null) {
        return await this._write(LOG_INFO, message, label)
    }

    async debug(message, label=null) {
        return await this._write(LOG_DEBUG, message, label)
    }

    async warn(message, label=null) {
        return await this._write(LOG_WARN, message, label)
    }

    async error(message, label=null) {
        return await this._write(LOG_ERROR, message, label)
    }

    async fatal(message, label=null) {
        return await this._write(LOG_FATAL, message, label)
    }

    // PRIVATE MEMBERS

    async _write(level, message, label) {
        let data = {
            level: level,
            message: message
        }
        if (label) {
            data.label = label
        }
        let res = await this._http.post('/message', data)
        return res.data._id
    }
}

module.exports = MessageService
