# @trop/diary_nodejs

Loggin Client API for Nodejs

## Usage

```js
const diary = require('@trop/diary_nodejs')

async run() {
    let service = diary('http://api-endpoint-somewhere.com')
    let log_id = service.message.info('something happens')
}

run().
catch(e => {
    console.error(e)
    process.exit(1)
})
```

## Documents

* [Changelog](changelog.md)
* [Contribution](contribution.md)
* [Documents](doc/index.md)
