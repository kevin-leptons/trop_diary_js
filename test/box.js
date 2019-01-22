const {Service} = require('../lib')

let _diary

async function get_diary() {
    if (!_diary) {
        _diary = new Service()
    }
    return _diary
}

module.exports = {
    diary: get_diary
}
