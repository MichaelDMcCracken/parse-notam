var mocha = require('mocha');
var describe = mocha.describe;
var chai = require('chai');
var expect = chai.expect;
var parseNotam = require('../index.js');

describe('#parseNotam',function () {
  it('is a function',function () {
    expect(parseNotam).to.be.a('function');
  });

  it('returns an object',function () {
    expect(parseNotam('!RDU 08/302 (KRDU A1185/18) RDU RWY 05R/23L CLSD 1809010000-1809011200')).to.be.a('object');
  });
});
