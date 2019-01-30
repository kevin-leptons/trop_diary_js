# class Service

```js
const {Service} = require('@trop/diary_nodejs')
```

## constructor(conf)

* `conf` / Object / {}.
* `conf.endpoint` / String / 'http://localhost:8080' - URL refers to an API
  Endpoint

## get root()

**output** - [RootService](api_root_service.md) - an instance of root service

## get auth()

**ouput** - [AuthService](api_auth_service.md) - an instance of auth service

## get account()

**output** - [AccountService](api_account_service.md) - an instance of account
service


## get message()

**ouput** - [MessageService](api_message_service.md) - an instance of message
service
