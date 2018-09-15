'use strict';

var NOTAM_KEYWORDS = ['RWY', 'TWY', 'APRON', 'AD', 'OBST', 'NAV', 'COM', 'SVC', 'AIRSPACE', 'ODP', 'SID', 'STAR', 'CHART', 'DATA', 'IAP', 'VFP', 'ROUTE', 'SPECIAL', 'SECURITY'];

module.exports = function parseNotam (str) {
  var obj = {};
  obj.original = str;
  //obj.accountability = str.split(' ')[0].replace('!','');
  //obj.notamNumber = str.match(/\s([0-9]*\/[0-9]*)\s/)[1];
  //obj.notamNumPar = str.match(/\(([A-Z]{4})\s([A-Z][0-9]{4}\/[0-9]{2})\)/)[0];
  ////obj.location = str.match(/\s([A-Z]{3})\s([IAP,RWY,TWY,COM]*)\s([0-9,A-Z,a-z,.,:,\s]*)([0-9]{10})-([0-9]{10}|PERM)/)[0];
  ////obj.keyword = str.match(/\s([A-Z]{3})\s([IAP,RWY,TWY,COM]*)\s([0-9,A-Z,a-z,.,:,\s]*)([0-9]{10})-([0-9]{10}|PERM)/)[2];
  //var date = str.match(/([\d]{10})-([\d]{10}|PERM)([\w]{3})?/);
  //obj.date = {
  //  start: date[1],
  //  end: date[2]
  //};
  return obj;
};


//    \s([A-Z]{3})\s([IAP,RWY,TWY,COM]*)\s([0-9,A-Z,a-z,.,:,\s]*)([0-9]{10})-([0-9]{10}|PERM)
