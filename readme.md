# @trop/diary_nodejs

Loggin Client API for Nodejs

## Usage

```js
const diary = require('@trop/diary_nodejs')

async run() {
    let logd = diary('http://api-endpoint-somewhere.com')
    let log_id = await logd.message.info('something happens')
}
```

## Documents

* [Changelog](changelog.md)
* [Contribution](contribution.md)
* [Documents](doc/index.md)
