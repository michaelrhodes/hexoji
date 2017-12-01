var enc = require('punycode2/ucs2/encode')
var valid = /^[0-9A-F]+$/

module.exports = encode

function encode (str, base) {
  str = str && str.toUpperCase()
  base = '1F6' + (base || 0)
  return str && valid.test(str) &&
    enc(str.split('').map(function (ch) {
      return parseInt(base + ch, 16)
    })) || null
}
