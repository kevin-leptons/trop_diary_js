const assert = require('assert')

const box = require('./box')

describe('resource auth', () => {
    let diary
    let auth
    let old_token

    before(async () => {
        diary = await box.diary()
        auth = diary.auth
    })

    it('create_token() from password', async () => {
        let token = await auth.create_token({
            grant_type: 'password',
            username: 'root@mail.com',
            password: 'motherfucker'
        })

        assert(token)
        auth.set_token(token)
        old_token = token
    })

    it('create_token() from refresh_token', async () => {
        let token = await auth.create_token({
            grant_type: 'refresh_token',
            refresh_token: old_token.refresh_token
        })

        assert(token)
        auth.set_token(token)
    })
})
