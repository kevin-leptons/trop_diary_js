class ApiError extends Error {
    constructor(status, body) {
        super(`${status} ${JSON.stringify(body)}`)
        this.status = status
        this.body = body
        this.name = this.constructor.name
    }
}

class NetError extends Error {
    constructor(origin) {
        super()
        this.origin = origin
        this.name = this.constructor.name
    }
}

module.exports = {
    ApiError: ApiError,
    NetError: NetError
}
