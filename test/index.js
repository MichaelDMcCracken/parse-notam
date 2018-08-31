var mocha = require('mocha');
var describe = mocha.describe;
var chai = require('chai');
var expect = chai.expect;

var parseNotam = require('../index.js');
var rduNotam = "!RDU 08/302 (KRDU A1185/18) RDU RWY 05R/23L CLSD 1809010000-1809011200";
var fdcNotam = "!FDC 8/3637 (KRDU A1057/18) RDU IAP RALEIGH-DURHAM INTL, Raleigh/Durham, NC. RNAV (RNP) Z RWY 23L, AMDT 2B... RNAV (RNP) Z RWY 23R, AMDT 2B... RNAV (RNP) Z RWY 5L, AMDT 2B... RNAV (RNP) Z RWY 5R, AMDT 2B... PROCEDURE NA. 1807251819-1903061819EST";

describe('#parseNotam',function () {
  it('is a function',function () {
    expect(parseNotam).to.be.a('function');
  });

  it('returns an object',function () {
    expect(parseNotam(rduNotam)).to.be.a('object');
  });

  it('parses the accountability',function () {
    var notamObj = parseNotam(rduNotam);
    expect(notamObj.accountability).to.eq('RDU');
    notamObj = parseNotam(fdcNotam);
    expect(notamObj.accountability).to.eq('FDC');
  });

  it('parses the notamNumber',function () {
    var notamObj = parseNotam(rduNotam);
    expect(notamObj.notamNumber).to.eq('08/302');
  });

  it('parses the dates',function () {
    var notam = parseNotam(rduNotam);
    expect(notam.date).to.be.an('object');
    expect(notam.date.start).to.eq('1809010000');
    expect(notam.date.end).to.eq('1809011200');
  });
});
