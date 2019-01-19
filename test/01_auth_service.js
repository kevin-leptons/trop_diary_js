const assert = require('assert')

const box = require('./box')

describe('resource auth', () => {
    let diary
    let auth

    before(async () => {
        diary = await box.diary()
        auth = diary.auth
    })

    it('post()', async () => {
        let token = await auth.get_token('root@mail.com', 'goddamnit')
        assert(token.token)
        diary.set_token(token.token)
    })
})
