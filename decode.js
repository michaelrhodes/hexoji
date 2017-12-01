var dec = require('punycode2/ucs2/decode')

module.exports = decode

function decode (str) {
  return str && dec(str).map(function (co) {
    var str = co.toString(16)
    return str[str.length - 1]
  }).join('') || null
}
