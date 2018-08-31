'use strict';
module.exports = parseNotam;

var notamKeywords = ['RWY', 'TWY', 'APRON', 'AD', 'OBST', 'NAV', 'COM', 'SVC', 'AIRSPACE', 'ODP', 'SID', 'STAR', 'CHART', 'DATA', 'IAP', 'VFP', 'ROUTE', 'SPECIAL', 'SECURITY'];

function parseNotam(str) {
  var obj = {};

  obj.original = str;

  obj.accountability = str.split(' ')[0].replace('!','');

  obj.notamNumber = str.match(/\s([0-9]*\/[0-9]*)\s/)[1];

  var date = str.match(/([\d]{10})-([\d]{10}|PERM)([\w]{3})?/);
  obj.date = {
    start: date[1],
    end: date[2]
  };
  return obj;
}
