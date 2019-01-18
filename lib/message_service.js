const querystring = require('querystring')

class MessageService {
    constructor(http) {
        this._http = http
    }

    async list(filter) {
        let query = querystring.stringify(filter)
        let res = await this._http.get('/message', query)
        return res.data
    }

    async info(message, label=null) {
        return await this._write('info', message, label) 
    }

    async debug(message, label=null) {
        return await this._write('debug', message, label) 
    }

    async warn(message, label=null) {
        return await this._write('warn', message, label) 
    }

    async error(message, label=null) {
        return await this._write('error', message, label) 
    }

    async fatal(message, label=null) {
        return await this._write('fatal', message, label) 
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
