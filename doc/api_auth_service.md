# class AuthService

## get_token(conf)

**input**

* `conf` / Object / {}
* `conf.grant_type` / string, one of `password`, `token`
* `conf.username` / string, only if `grant_type=password`
* `conf.password` / string, only if `grant_type=password`
* `conf.refresh_token` /  string, only if `grant_type=refresh_token`

**ouput** - Object

* `type` / string / 'bearer'
* `expires_at` / integer
* `access_token` / string
* `refresh_token` / string
