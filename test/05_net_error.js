const assert = require('assert')

const uuidv4 = require('uuid/v4')

const {Service, NetError} = require('../lib')

describe('network error', () => {
    it('connect to unavailable API endpoint => NetError', async () => {
        let service =  new Service({
            endpoint: 'http://' + uuidv4().toString() + '.com'
        })
        try {
            await service.root.get()
        } catch (e) {
            assert(e instanceof NetError)
            return
        }
        assert.fail('Does not throw NetError')
    })
})
