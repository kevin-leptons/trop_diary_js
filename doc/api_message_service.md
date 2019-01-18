# class MessageService

```js
const diary = require('@trop/diary_nodejs')

let service = diary('http://api-endpoint-somewhere.com')

service.message
```

## list(filter)

**input**

* `filter` / object / {}
* `filter.q` / string / null
* `filter.p` / integer / 1 - page index
* `filter.s` / integer / 8 - page size

**ouput** - `Array<Object>`

**synopsis** - retrive log messages

## LOG_LEVEL(message, label=null)

**input**

* `message` / any
* `label` / string / null

**ouput** - `string`, identity of message

**synopsis** - create log message by level `LOG_LEVEL`, where `LOG_LEVEL`
can be

* info
* debug
* warn
* error
* fatal
