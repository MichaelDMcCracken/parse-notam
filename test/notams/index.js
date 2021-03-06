var mocha = require('mocha');
var describe = mocha.describe;
var chai = require('chai');
var expect = chai.expect;
var parseNotam = require('../../index.js');
var fs = require('fs');
var path = require('path');

describe('notams',function () {
  var files = fs.readdirSync(path.resolve(__dirname));

  var notams = [];
  files.forEach(function (fileName) {
    if (fileName.endsWith('.json')) {
      notams.push(JSON.parse(fs.readFileSync(path.resolve(__dirname,fileName))));
    }
  });

  notams.forEach(function (notam,i) {
    it(files[i],function () {
      expect(notam).to.eql(parseNotam(notam.original));
    });
  });
});
