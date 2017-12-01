var test = require('tape')
var sha1 = require('simple-sha1')
var encode = require('./encode')
var decode = require('./decode')

test('it works', function (t) {
  var input = sha1.sync('hexoji')
  t.equal(decode(encode(input)), input)
  t.equal(decode(encode(input, 1)), input)
  t.equal(decode(encode(input, 2)), input)
  t.equal(decode(encode(input, 3)), input)
  t.equal(decode(encode(input, 4)), input)
  t.end()
})
