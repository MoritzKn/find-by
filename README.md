# Find By

[![Build Status](https://travis-ci.org/MoritzKn/find-by.svg?branch=master)](https://travis-ci.org/MoritzKn/find-by)

Small helper to assist you with finding/filtering elements in an
array by a specific key.

## Install

```
npm install find-by --save
```

## Example

```js
const by = require('find-by')

const list = [
  { title: 'A New Hope', episode: 'IV' },
  { title: 'The Empire Strikes Back', episode: 'V' },
  { title: 'Return of the Jedi', episode: 'VI' }
]

console.log(list.find(by('episode', 'V')).title)
// => The Empire Strikes Back
```


For common keys there are also the shorter versions `by.id`, `by.slug`
and `by.type`:

```js
const by = require('find-by')

const list = [
  { id: 15, name: 'Foo' },
  { id: 42, name: 'Bar' },
  { id: 10, name: 'Baz' }
]

console.log(list.find(by.id(42)).name)
// => Bar
```
