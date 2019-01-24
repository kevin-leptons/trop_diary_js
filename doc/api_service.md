# class Service

```js
const {Service} = require('@trop/diary_nodejs')
```

## constructor()

* `conf` / Object / {}.
* `conf.endpoint` / String / 'http://localhost:8080'. URL refers to API
  endpoint.

## get root

* [RootService](api_root_service.md), essential system information

## get auth

* [AuthService](api_auth_service.md), for authentication

## get key

* [KeyService](api_key_service.md), for `server-server` authentication

## account

* [AccountService](api_account_service.md), accounts resource


## messag

* [MessageService](api_message_service.md), log message resource
