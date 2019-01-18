const assert = require('assert')

const box = require('./box')

describe('resource root', () => {
    let root

    before(async () => {
        let diary = await box.diary()
        root = diary.root
    })

    it('get()', async () => {
        let info = await root.get()
        assert(info)
    })
})
