# strict-uri-encode [![Build Status](https://travis-ci.org/kevva/strict-uri-encode.svg?branch=master)](https://travis-ci.org/kevva/strict-uri-encode)

> A stricter URI encode adhering to [RFC 3986](http://tools.ietf.org/html/rfc3986)


## Install

```
$ npm install strict-uri-encode
```


## Usage

```js
const strictUriEncode = require('strict-uri-encode');

strictUriEncode('unicorn!foobar');
//=> 'unicorn%21foobar'

strictUriEncode('unicorn*foobar');
//=> 'unicorn%2Afoobar'
```


## API

### strictUriEncode(string)

#### string

Type: `string | number`

String to URI encode.

## Note

Thanks to Kevin (https://github.com/kevva/strict-uri-encode) for the repo
