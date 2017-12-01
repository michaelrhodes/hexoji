# hexoji

hexoji is a module for deterministically encoding and decoding hexadecimal strings as emoji using characters from [the **Emoticons** Unicode block](https://www.unicode.org/charts/PDF/U1F600.pdf). Encodings can be performed using one of five character sets.

[![Build status](https://travis-ci.org/michaelrhodes/hexoji.svg?branch=master)](https://travis-ci.org/michaelrhodes/hexoji)

## available character sets
default: Set 0

|   | Set 0 | Set 1 | Set 2 | Set 3 | Set 4 |
|:-:|:-----:|:-----:|:-----:|:-----:|:-----:|
| 0 |   😀   |   😐   |   😠   |   😰   |   🙀   |
| 1 |   😁   |   😑   |   😡   |   😱   |   🙁   |
| 2 |   😂   |   😒   |   😢   |   😲   |   🙂   |
| 3 |   😃   |   😓   |   😣   |   😳   |   🙃   |
| 4 |   😄   |   😔   |   😤   |   😴   |   🙄   |
| 5 |   😅   |   😕   |   😥   |   😵   |   🙅   |
| 6 |   😆   |   😖   |   😦   |   😶   |   🙆   |
| 7 |   😇   |   😗   |   😧   |   😷   |   🙇   |
| 8 |   😈   |   😘   |   😨   |   😸   |   🙈   |
| 9 |   😉   |   😙   |   😩   |   😹   |   🙉   |
| a |   😊   |   😚   |   😪   |   😺   |   🙊   |
| b |   😋   |   😛   |   😫   |   😻   |   🙋   |
| c |   😌   |   😜   |   😬   |   😼   |   🙌   |
| d |   😍   |   😝   |   😭   |   😽   |   🙍   |
| e |   😎   |   😞   |   😮   |   😾   |   🙎   |
| f |   😏   |   😟   |   😯   |   😿   |   🙏   |


## example

```js
var sha1 = require('simple-sha1')
var encode = require('hexoji/encode')
var decode = require('hexoji/decode')
var set = undefined // or a number [0-4]

sha1('hexoji', function (hash) {
  console.log(hash)
  > '19d52be9ca083fa5903c8ac807e693c2ed037abe'
  console.log(encode(hash, set))
  > '😁😉😍😅😂😋😎😉😌😊😀😈😃😏😊😅😉😀😃😌😈😊😌😈😀😇😎😆😉😃😌😂😎😍😀😃😇😊😋😎'
  console.log(decode(encode(hash, set)))
  > '19d52be9ca083fa5903c8ac807e693c2ed037abe'
})
```

## install

```sh
$ npm install hexoji
```

## licence
[MIT](http://opensource.org/licenses/MIT)
