# Installation

* [Node.js == v10.x](https://nodejs.org/en/download/package-manager/)
* [@trop/diary_api](https://trop-diary-api.netlify.com)

# File System

* `lib/` -  library
* `test/` - unit testing
* `doc/` - documents

# Test

**Make sure that @trop/diary_api is activated at local**

```bash
systemctl start trop-diary-api
systemctl status trop-diary-api
```

**Run Unit Tests**

```bash
npm install
npm test
```

# Publish

* Update changes in `changelog.md`
* Up version in `package.json`
* Run `npm publish` to push new version to `npm registry`
