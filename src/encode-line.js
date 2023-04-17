const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str=str.split('');
  let stack=[];
  let indx = 0;
  let stackIndx = 0;
  while (indx < str.length) {
      let i = 1;
      while(str[indx] == str[indx+i]){
          i++
      }
      stack.push([]);
      stack[stackIndx].push(i);
      stack[stackIndx].push(str[indx]);
      stackIndx++;
      indx=indx+i;
  }
  let final = []
  stack.flat().forEach((el)=>{
      if(el !== 1) {
          final.push(el);
      }
  })
  return final.join('');
}

module.exports = {
  encodeLine
};
