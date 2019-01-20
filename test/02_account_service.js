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
        let res = await account.list({
            q: undefined,
            p: 1
        })

        assert(res.length > 0)
    })

    it('create()', async () => {
        let res = await account.create({
            email: new_email,
            password: created_password,
            role:'r'
        })
        assert(res)
    })

    it('change_password()', async () => {
        let res = await account.change_password({
            email: new_email,
            old_password: created_password,
            new_password: 'new password'
        })
        assert(res)
    })

    it('change_role()', async () => {
        let res = await account.change_role({
            email: new_email,
            role: 'rw'
        })
        assert(res)
    })

    it('remove()', async () => {
        let res = await account.remove(new_email)
        assert(res)
    })
})
