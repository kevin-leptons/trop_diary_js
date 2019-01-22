const assert = require('assert')

const faker = require('faker')

const box = require('./box')

describe('resource account', () => {
    let account
    let new_email = faker.internet.email()
    let created_password = 'onetwothree'

    before(async () => {
        let diary = await box.diary()
        account = diary.account
    })

    it('list()', async () => {
        let items = await account.list({
            p: 1
        })

        assert(items instanceof Array)
        assert(items.length > 0)
    })

    it('create()', async () => {
        await account.create({
            email: new_email,
            password: created_password,
            role:'r'
        })
    })

    it('change_password()', async () => {
        await account.change_password({
            email: new_email,
            old_password: created_password,
            new_password: 'new password'
        })
    })

    it('change_role()', async () => {
        await account.change_role({
            email: new_email,
            role: 'rw'
        })
    })

    it('remove()', async () => {
        await account.remove(new_email)
    })
})
