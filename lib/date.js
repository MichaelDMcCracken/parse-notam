module.exports = function parseNotamDate(notamDateString) {
  var obj;
  
  if (str === 'PERM') {
    obj = {
      permanent: true
    };
  }
  else {
    obj = {
      year: '20' + str.slice(0,2),
      month: str.slice(2,4),
      day: str.slice(4,6),
      time: str.slice(6,10)
    };
    if (str.slice(10) === 'EST') {
      obj.estimated = true;
    }
  }
  
  return obj;
};
