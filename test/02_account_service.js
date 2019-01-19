const assert = require('assert')

const faker = require('faker')

const box = require('./box')

describe('resource account', () => {
    let account

    before(async () => {
        let diary = await box.diary()
        account = diary.account
    })

    it('post()', async () => {
        let email = faker.internet.email()
        let res = await account.create(email, 'goddamnit', 'rw')
        assert(res)
    })
})
