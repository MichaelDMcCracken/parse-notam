var mocha = require('mocha');
var describe = mocha.describe;
var chai = require('chai');
var expect = chai.expect;
var parseNotam = require('../index.js');
var fs = require('fs');
var path = require('path');

describe('#parseNotam',function () {
  it('is a function',function () {
    expect(parseNotam).to.be.a('function');
  });

  it('returns an object',function () {
    expect(parseNotam('!RDU 08/302 (KRDU A1185/18) RDU RWY 05R/23L CLSD 1809010000-1809011200')).to.be.a('object');
  });
});

var files = fs.readdirSync(path.resolve(__dirname,'notams'));

var notams = [];
files.forEach(function (fileName) {
  if (fileName.endsWith('.json')) {
    notams.push(JSON.parse(fs.readFileSync(path.resolve(__dirname,'notams',fileName))));
  }
});

notams.forEach(function (notam) {
  var original = notam.original;
  var newObj = parseNotam(original);


});
