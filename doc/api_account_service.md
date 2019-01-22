# class AccountService

## list(conf)

**input**

* `conf` / Object / {}
* `conf.p` / integer

**ouput** - `Array<Object>`

## create(item)

**input**

* `item` / Object / {}
* `item.email` / sting
* `item.password` / string

**output** - `string`, identity of account

## change_password(conf)

**input**

* `conf` / Object / {}
* `conf.old_password` / string
* `conf.new_password` / string

**output** - `none`

## change_role(conf)

**input**

* `conf` / Object / {}
* `conf.email` / string
* `conf.role` / string

**output** - `none`

## remove(email)

**input**

* `email` / string

**output** - `none`
