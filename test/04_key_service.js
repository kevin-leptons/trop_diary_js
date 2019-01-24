const assert = require('assert')

const box = require('./box')
const {ApiError} = require('../lib')

describe('resource key', () => {
    let keygen

    before(async () => {
        let diary = await box.diary()
        keygen = diary.key
    })

    it('create()', async () => {
        let key = await keygen.create({
            role: 'r'
        })

        assert(key instanceof Object)
    })

    it('create(invalid role) => error', async () => {
        try {
            let key = await keygen.create({
                role: 'root'
            })
        } catch (e) {
            assert(e instanceof ApiError)
            return
        }
        assert.fail('Does not throw ApiError')
    })
})
