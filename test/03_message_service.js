const assert = require('assert')

const uuidv4 = require('uuid/v4')

const box = require('./box')
const {ApiError} = require('../lib')

describe('resource mesage', () => {
    let message
    let existed_message

    before(async () => {
        let diary = await box.diary()
        message = diary.message

        let key_file = box.get_key('key_file')
        diary.auth.use_key_file(key_file)
    })

    it('info', async() => {
        let id = await message.info('something happens')
        _assert_uuid(id)
    })

    it('debug', async () => {
        let id = await message.debug('debuging')
        _assert_uuid(id)
    })

    it('warn', async () => {
        let id = await message.warn('warning')
        _assert_uuid(id)
    })

    it('error', async () => {
        let id = await message.error('error happens')
        _assert_uuid(id)
    })

    it('fatal', async () => {
        let id = await message.fatal('oops')
        _assert_uuid(id)
    })

    it('list()', async () => {
        let items = await message.list()

        assert(items instanceof Array)
        assert(items.length > 0)
        existed_message = items[0]
    })

    it('list(p=1000)', async () => {
        let items = await message.list({
            p: 1000
        })

        assert(items instanceof Array)
        assert.equal(items.length, 0)
    })

    it('list(ll=0, ul=4)', async () => {
        let items = await message.list({
            ll: 0,
            ul: 4
        })

        assert(items instanceof Array)
        assert(items.length > 0)
    })

    it('list(lc=today_start, uc=today_end)', async () => {
        let d = new Date()
        d.setHours(0)
        d.setMinutes(0)
        d.setSeconds(0)
        let today_start = Math.floor(d.getTime() / 1000)
        d.setDate(d.getDate() + 1)
        let today_end = Math.floor(d.getTime() / 1000)
        let items = await message.list({
            lc: today_start,
            uc: today_end
        })

        assert(items instanceof Array)
        assert(items.length > 0)
    })

    it('list(uc=yesterday) => empty', async () => {
        let d = new Date()
        d.setHours(0)
        d.setMinutes(0)
        d.setSeconds(0)
        d.setDate(d.getDate() - 1)
        let yesterday = Math.floor(d.getTime() / 1000)
        let items = await message.list({
            uc: yesterday
        })

        assert(items instanceof Array)
        assert.equal(items.length, 0)
    })

    it('find(existed message)', async () => {
        let item = await message.find(existed_message._id)

        assert(item instanceof Object)
    })

    it('find(non existed message) => 404', async () => {
        let id = uuidv4()

        try {
            let item = await message.find(id.toString())
        } catch (e) {
            assert(e instanceof ApiError)
            assert.equal(e.status, 404)
        }
    })
})

function _assert_uuid(input) {
    assert.equal(input.length, 36)
}
