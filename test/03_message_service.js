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
        assert(messages.length > 0)
    })

    it('list(p=1000)', async () => {
        let messages = await message.list({
            p: 1000
        })
        assert.equal(messages.length, 0)
    })

    it('list(ll=0, ul=4)', async () => {
        let messages = await message.list({
            ll: 0,
            ul: 4
        })
        assert(messages.length > 0)
    })

    it('list(lc=today_start, uc=today_end)', async () => {
        let d = new Date()
        d.setHours(0)
        d.setMinutes(0)
        d.setSeconds(0)
        let today_start = Math.floor(d.getTime() / 1000)
        d.setDate(d.getDate() + 1)
        let today_end = Math.floor(d.getTime() / 1000)
        let messages = await message.list({
            lc: today_start,
            uc: today_end
        })
        assert(messages.length > 0)
    })

    it('list(uc=yesterday)', async () => {
        let d = new Date()
        d.setHours(0)
        d.setMinutes(0)
        d.setSeconds(0)
        d.setDate(d.getDate() - 1)
        let yesterday = Math.floor(d.getTime() / 1000)
        let messages = await message.list({
            uc: yesterday
        })
        assert.equal(messages.length, 0)
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
