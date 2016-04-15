# random-ipv6

> Generate a random ipv6 address.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/random-ipv6/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/random-ipv6/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/random-ipv6)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/random-ipv6/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/random-ipv6)


## Install

```
$ npm install --save random-ipv6 
```

## Usage

```js
var randomIpv6 = require('random-ipv6');

randomIpv6();
// => 2c56:9a76:aee6:3552:855a:f757:3611:255a

randomIpv6('127:0::{ token }.1', {
    token: {
        min: 0,
        max: 65535
    }
});
// => 127.0.::f757.1

randomIpv6('{ token }::1', {
    padded: true,
    token:{
        min: 0,
        max: 65535
    }
});
// => 0ee1::0001

randomIpv6('{ token }:0:0:0:0:1:0:0', {
    compressed: true,
    token:{
        min: 0,
        max: 65535
    }
});
// => f07a::1:0:0

```

## API

### randomIpv6(schema, [options])

`schema` - the ipv4 schema, default `'{ token1 }:{ token2 }:{ token3 }:{ token4 }:{ token5 }:{ token6 }:{ token7 }:{ token8 }'`.

`options` - options for every **token**, each token has `min` and `max` option, which both are from `0` to `65535`.

`options.padded` - pad prefix `0` with part which's length less than `4`.

`options.compressed` - compress the ipv6.

## Related
