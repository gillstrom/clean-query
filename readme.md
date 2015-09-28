# clean-query [![Build Status](https://travis-ci.org/gillstrom/clean-query.svg?branch=master)](https://travis-ci.org/gillstrom/clean-query)

> Remove empty values from an object and serialize to a query string


## Install

```
$ npm install --save clean-query
```


## Usage

```js
var cleanQuery = require('clean-query');

cleanQuery({a: 'foo', b: undefined, c: '', d: null, e: 123});
//=> 'a=foo&e=123'
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
