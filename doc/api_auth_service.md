# class AuthService

## create_token(conf)

**input**

* `conf` / Object / {}
* `conf.grant_type` / string, one of `password`, `token`
* `conf.username` / string, only if `grant_type=password`
* `conf.password` / string, only if `grant_type=password`
* `conf.refresh_token` /  string, only if `grant_type=refresh_token`

**ouput** - `Object`

* `type` / string / 'bearer'
* `expires_at` / integer
* `access_token` / string
* `refresh_token` / string

## create_key(conf)

**input**

* `conf` / Object / {}
* `conf.role` / string, one of `r`, `w`, `rw`

**ouput** - `Object`

* `type` / string / 'key'
* `expires_at` / integer / 0
* `access_token` / string


## set_token(token)

**input**

* `token` / object, which is return from `create_token()` or `create_key()`

**ouput** - `none`

## use_key_file(file)

**input**

* `file` / string, path to key file which contains returned data from
  `create_key()`

**ouput** - `none`

## on(evt, callback)

* `evt` / string, event name
* `callback` / function(err, data)
    * `err` / any, on error it is specifies
    * `ata` / any, data from event

There are events

* `refresh_token`, if current access token is expired and this event is
   specify then library refresh token automaticall, then execute callback
