const assert = require('assert')

const uuidv4 = require('uuid/v4')
const faker = require('faker')

const box = require('./box')

describe('push mesages', () => {
    let message

    before(async () => {
        let token_key = box.get_key('token_key')
        let diary = await box.diary()

        diary.auth.set_key(token_key)
        message = diary.message
    })

    it('push a lot of messages', async () => {
        for (let i = 0; i < 100; ++i) {
            let level_index = _random_logger(i)
            let content = _random_message()
            await message[level_index](content, 'streess')
        }
    })
})

function _random_logger(i) {
    let level_map = ['info', 'debug', 'warn', 'error', 'fatal']
    let level_index = i % 5
    return level_map[level_index]
}

function _random_message() {
    return faker.fake('{{lorem.paragraph}}')
}
