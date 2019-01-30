# class AccountService

Checkout [class Service](api_service.md) to get an instance of this service

## list(conf)

**input**

* `conf` / Object / {}
* `conf.p` / integer

**ouput** - `Array<Object>`

**description**

* retrieve accounts

## create(item)

**input**

* `item` / Object / {}
* `item.email` / sting
* `item.password` / string
* `item.role` / string - one of `r`, `w`, `rw` or `root`

**output** - `UUIDv4` - identity of account

**description**

* create an account with specific role

## change_password(conf)

**input**

* `conf` / Object / {}
* `conf.old_password` / string
* `conf.new_password` / string

**output** - `none`

**description**

* change password of specific account

## change_role(conf)

**input**

* `conf` / Object / {}
* `conf.email` / string
* `conf.role` / string

**output** - `none`

**description**

* change role of specify account

## remove(email)

**input**

* `email` / string

**output** - `none`

**description**

* remove an account
