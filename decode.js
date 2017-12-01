var dec = require('punycode2/ucs2/decode')
var hex = require('./is-hex')

module.exports = decode

function decode (str) {
  var base, val = str && dec(str).map(function (co, i) {
    var v = co.toString(16), l = v.length
    if (!i) base = v[l - 2]
    return v.toUpperCase().slice(0, -2) === '1F6' &&
      v[l - 2] === base ?
      v[l - 1] : 'X'
  }).join('')

  return val && hex.test(val) ? val : null
}
