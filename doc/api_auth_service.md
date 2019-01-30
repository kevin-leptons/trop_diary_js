# class AuthService

Checkout [class Service](api_service.md) to get an instance of this service

## create_token(conf)

**input**

*Case 1: Login*

* `conf` / Object / {}
* `conf.grant_type` / string / `password`
* `conf.username` / string
* `conf.password` / string

*Case 2: Refresh Token*

* `conf` / Object / {}
* `conf.grant_type` / string / `token`
* `conf.refresh_token` /  string

**ouput** - `Object`

* `type` / string / `bearer`
* `expires_at` / integer
* `access_token` / string
* `refresh_token` / string

**description**

* create a token for `client-server` authentication

## create_key(conf)

**input**

* `conf` / Object / {}
* `conf.role` / string - one of `r`, `w`, `rw`

**ouput** - `Object`

* `type` / string / 'key'
* `expires_at` / integer / 0
* `access_token` / string

**description**

* Create a key for `server-server` authentication

## set_token(token)

**input**

* `token` / object - which is return from `create_token()` or `create_key()`

**ouput** - `none`

**description**

* set a token for `client-server` authentication, all of operations on service
  will be affected

## use_key_file(file)

**input**

* `file` / string - path to file which contains returned data from
  `create_key()`

**ouput** - `none`

**description**

* set a key file for `server-server` authentication, all of operations on
  service will be affected

## on(evt, callback)

* `evt` / string - event name
* `callback` / function(err, data)
    * `err` / any - on error it is specifies
    * `ata` / any - data from event

There are events

* `refresh_token` - if current access token is expired and this event is
   specify then refresh token automatically, then execute callback
