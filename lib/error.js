class ApiError extends Error {
    constructor(status, body) {
        super(`${status} ${JSON.stringify(body)}`)
        this.status = status
        this.body = body
        this.name = this.constructor.name
    }
}

module.exports = {
    ApiError: ApiError
}
