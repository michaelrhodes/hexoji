var enc = require('punycode2/ucs2/encode')
var hex = require('./is-hex')

module.exports = encode

function encode (str, set) {
  str = str && str.toUpperCase()
  set = '1F6' + (set || 0)
  return str && hex.test(str) ?
    enc(str.split('').map(function (ch) {
      return parseInt(set + ch, 16)
    })) : null
}
