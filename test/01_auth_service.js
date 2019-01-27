const assert = require('assert')
const fs = require('fs')
const path = require('path')

const uuidv4 = require('uuid/v4')

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
            role: 'rw'
        })

        assert(key instanceof Object)
        box.set_key('token_key', key)
        let key_file = _create_key_file()
        box.set_key('key_file', key_file)
        fs.writeFileSync(key_file, JSON.stringify(key))
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

    it('use_key_file() => error file does not exits', () => {
        let fake_file = path.join('/tmp', uuidv4())
        assert.throws(() => {
            auth.use_key_file(fake_file)
        })
    })
})

function _create_key_file() {
    let file = path.join(__dirname, '../tmp', uuidv4())

    fs.mkdirSync(path.dirname(file), {
        recursive: true
    })
    return file
}
