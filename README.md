# random-ipv6

> Return a random ipv6 address.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-ipv6/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-ipv6/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-ipv6)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-ipv6/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-ipv6)


## Install

```
$ npm install --save random-ipv6 
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-ipv4/blob/master/test/spec/index.js)

```js
var randomIpv6 = require('random-ipv6');

// API
// - randomIpv6(schema[, options]);


randomIpv6();
// => 2c56:9a76:aee6:3552:855a:f757:3611:255a


randomIpv6('127:0::{token}.1', {
    token: {
        min: 0,
        max: 65535
    }
});
// => 127.0.::f757.1


randomIpv6('{token}::1', {
    padded: true,
    token:{
        min: 0,
        max: 65535
    }
});
// => 0ee1::0001


randomIpv6('{token}:0:0:0:0:1:0:0', {
    compressed: true,
    token:{
        min: 0,
        max: 65535
    }
});
// => f07a::1:0:0
```

**Note**:

- `schema` - the ipv6 schema, default `'{token1}:{token2}:{token3}:{token4}:{token5}:{token6}:{token7}:{token8}'`.
- `options` - options for every **token**, each token has `min` and `max` option, which both are from `0` to `65535`.
- `options.padded` - pad prefix `0` with part when it's length less than `4`.
- `options.compressed` - compress the ipv6.


## Related

- [random-ipv4](https://github.com/mock-end/random-ipv4) - Return a random ipv4 address.
- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld(Top Level Domain).
- [random-domains](https://github.com/mock-end/random-domains) - Return a random domain.
- [random-email](https://github.com/mock-end/random-email) - Return a random email.
- [random-protocol](https://github.com/mock-end/random-protocol) - Return a random protocol.
- [random-hashtag](https://github.com/mock-end/random-tld) - Return a random hashtag.
- [random-uri](https://github.com/mock-end/random-uri.git) - Return a random url.
- [random-avatar](https://github.com/mock-end/random-avatar) - Return a URL to a random avatar from Gravatar.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-ipv6/issues/new).
