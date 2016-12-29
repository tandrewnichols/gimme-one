[![Build Status](https://travis-ci.org/tandrewnichols/gimme-one.png)](https://travis-ci.org/tandrewnichols/gimme-one) [![downloads](http://img.shields.io/npm/dm/gimme-one.svg)](https://npmjs.org/package/gimme-one) [![npm](http://img.shields.io/npm/v/gimme-one.svg)](https://npmjs.org/package/gimme-one) [![Code Climate](https://codeclimate.com/github/tandrewnichols/gimme-one/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/gimme-one) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/gimme-one/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/gimme-one) [![dependencies](https://david-dm.org/tandrewnichols/gimme-one.png)](https://david-dm.org/tandrewnichols/gimme-one) ![Size](https://img.shields.io/badge/size-179b-brightgreen.svg)

# gimme-one

Get a random item from a list

## Installation

`npm install --save gimme-one`

## Summary

Pass in a list and get a random item from that list back.

## Usage

```
var gimme = require('gimme-one');
var list = ['foo', 'bar', 'baz'];
console.log( gimme(list) ); // One of foo, bar, baz
```

### Browser

Just serve dist/gimme-one.js or dist/gimme-one.min.js however you serve javascript in your application.

## Contributing

Please see [the contribution guidelines](CONTRIBUTING.md).
