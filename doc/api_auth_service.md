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


## set_token(access_token)

**input**

* `access_token` / string, from `create_token().access_token`

**ouput** - `none`

## set_key(access_token)

**input**

* `access_token` / string, from `create_key().access_token`

**ouput** - `none`

## use_key_file(file)

**input**

* `file` / string, path to key file which contains return data from
  `create_key()`

**ouput** - `none`
