const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  let first = s1.length;
  let second = s2.length;
  if (s1.length >= s2.length){
      s1.forEach((el,indx)=>{
          let check = s2.findIndex((elem)=>{
              return elem == el});
          if (check >= 0) {
              s2.splice(check,1);
          }
      })
      return second - s2.length;
  } else {
      s2.forEach((el,indx)=>{
          let check = s1.findIndex((elem)=>{
              return elem == el});
          if (check >= 0) {
              s1.splice(check,1);
          }
      })
      return first - s1.length
  };
}

module.exports = {
  getCommonCharacterCount
};
