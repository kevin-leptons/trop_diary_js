const assert = require('assert')

const box = require('./box')

describe('resource service', () => {
    let message

    before(async () => {
        let diary = await box.diary()
        message = diary.message
    })

    it('list()', async () => {
        let messages = await message.list()
        assert(messages)
    })

    it('info', async() => {
        let id = await message.info('something happens')
        assert(id)
    })

    it('debug', async () => {
        let id = await message.debug('debuging')
        assert(id)
    })

    it('warn', async () => {
        let id = await message.warn('warning')
        assert(id)
    })

    it('error', async () => {
        let id = await message.error('error happens')
        assert(id)
    })

    it('fatal', async () => {
        let id = await message.fatal('oops')
        assert(id)
    })
})
