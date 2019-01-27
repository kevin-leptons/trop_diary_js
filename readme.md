# @trop/diary_nodejs

Node.js Client Library for interacting with `@trop/diary_api` -
A Logging Service

## Usage

```js
const {Service} = require('@trop/diary_nodejs')

async run() {
    let service = new Service({
        endpoint: 'http://api-endpoint-somewhere.com'
    })

    service.auth.use_key_file('path/to/key.json')
    let id = await service.message.info('something happens')
}
```

* `service`, client endpoint
* `path/to/key.json`, credential file
* `id`, identity of log message

## References

* [Changelog](changelog.md)
* [Contribution](contribution.md)
* [Documents](doc/index.md)
* [@trop/diary_api](https://www.npmjs.com/package/@trop/diary_api) -
  API Endpoint
* [@trop/diary_cli](https://www.npmjs.com/package/@trop/diary_cli) -
  Client command line for interacting with API Endpoint
