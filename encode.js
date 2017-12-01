var enc = require('punycode2/ucs2/encode')
var hex = require('./is-hex')

module.exports = encode

function encode (str, base) {
  str = str && str.toUpperCase()
  base = '1F6' + (base || 0)
  return str && hex.test(str) ?
    enc(str.split('').map(function (ch) {
      return parseInt(base + ch, 16)
    })) : null
}
