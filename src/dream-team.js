const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length == 0) return false;
  let dreamTeam = members.reduce(function(res, name) {
    if(typeof name === 'string' && name.length > 0) {
      return res + name.trim()[0].toUpperCase();
    } else {
      return res;
    }
  },'');
  if(dreamTeam.length == 0) return false;
  return dreamTeam.split('').sort().join('');
};
