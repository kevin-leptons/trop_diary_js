# class Service

```js
const diary = require('@trop/diary_nodejs')

let service = diary('http://api-endpoint-somewhere.com')
```

This class is not exported, call `diary()` returns an instance. Theare are attributes.

* `service.root` / [RootService](api_root_service.md). Retrieve log system information.
* `service.message` / [MessageService](api_message_service.md). Work with log messages.
