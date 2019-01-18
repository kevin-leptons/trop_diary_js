const diary = require('../lib')

let _diary

async function get_diary() {
    if (!_diary) {
        _diary = diary()
    }
    return _diary
}

module.exports = {
    diary: get_diary
}
