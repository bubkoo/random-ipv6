# random-ipv6

> Generate a random ipv6 address.


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



- [random-integral](https://github.com/mock-end/random-integral) - Generate a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Generate a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Generate a random decimal.
- [random-index](https://github.com/mock-end/random-index) - Generate a random array-like index.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Generate a random hexadecimal number.
- [random-octal](https://github.com/mock-end/random-octal) - Generate a random octal.
- [random-unicode](https://github.com/mock-end/random-unicode) - Generate a random unicode.
- [random-bool](https://github.com/mock-end/random-bool) - Generate a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Generate a random char.
- [random-lorem](https://github.com/mock-end/random-lorem) - Generate a random world.
- [random-title](https://github.com/mock-end/random-title) - Generate a random title.
- [random-sentence](https://github.com/mock-end/random-sentence) - Generate a random sentence.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Generate a random paragraph.
- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld.
- [random-domains](https://github.com/mock-end/random-domains) - Generate a random domain name.
- [random-uri](https://github.com/mock-end/random-uri.git) - Generate a random url.
- [random-email](https://github.com/mock-end/random-email) - Generate a random email.
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.
- [random-mobile](https://github.com/mock-end/random-mobile) - Generate a random chinese mobile phone number.
- [random-zipcode](https://github.com/mock-end/random-zipcode) - Generate a random chinese zipcode.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Generate a random ipv4 address.
- [random-color](https://github.com/mock-end/random-color) - Generate a random color.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-ipv4/issues/new).
