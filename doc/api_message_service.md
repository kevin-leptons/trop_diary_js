# class MessageService

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

**synopsis** - retrieve log messages

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
