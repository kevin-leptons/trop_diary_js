const {Service} = require('../lib')

let _diary
let _keys = {}

async function get_diary() {
    if (!_diary) {
        _diary = new Service()
    }
    return _diary
}

function set_key(k, v) {
    _keys[k] = v
}

function get_key(k) {
    return _keys[k]
}

module.exports = {
    diary: get_diary,
    set_key: set_key,
    get_key: get_key
}
