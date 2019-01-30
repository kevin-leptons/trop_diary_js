# class MessageService

Checkout [class Service](api_service.md) to get an instance of this service

## list(filter)

**input**

* `filter` / object / {}
* `filter.p` / integer / 1 - page index
* `filter.ll` / integer - lower bound level
* `filter.ul` / integer - upper bound level
* `filter.lc` / integer - lower bound created date
* `filter.uc` / integer - upper bound created date
* `filter.l` / string - label

**ouput** - `Array<Object>`

**description**

* retrieve log messages

## find(id)

**input**

* `id` / string - identity of message

**output** - `Object`

**description**

* find a message by identity

## LOG_LEVEL(message, label=null)

**input**

* `message` / any
* `label` / string / null

**ouput** - `UUIDv4`, identity of created message

**description**

* create a log message
* `LOG_LEVEL` can be on of `info`, `debug`, `warn`, `error` or `fatal` which
  correspond with log level
