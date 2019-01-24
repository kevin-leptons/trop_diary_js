const assert = require('assert')

const box = require('./box')
const {ApiError} = require('../lib')

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

        assert(token instanceof Object)
        auth.set_token(token.access_token)
        old_token = token
    })

    it('create_token() from refresh_token', async () => {
        let token = await auth.create_token({
            grant_type: 'refresh_token',
            refresh_token: old_token.refresh_token
        })

        assert(token instanceof Object)
        auth.set_token(token.access_token)
    })

    it('create_key()', async () => {
        let key = await auth.create_key({
            role: 'r'
        })

        assert(key instanceof Object)
    })

    it('create_key(invalid role) => error', async () => {
        try {
            let key = await auth.create_key({
                role: 'root'
            })
        } catch (e) {
            assert(e instanceof ApiError)
            return
        }
        assert.fail('Does not throw ApiError')
    })
})
