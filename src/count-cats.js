const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let res = 0;
  if(arr !== undefined && arr.length > 0) {
    res = arr.reduce(function(sum, catArr) {
      catArr.forEach(function(item) {
        if(item === "^^") sum++;
      });
      return sum;
    },0)
  }
  return res;
};
