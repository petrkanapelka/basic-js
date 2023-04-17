const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
      throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  let transformArr = [];
  arr.forEach((el,index)=>{
      if (el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev'){
          transformArr.push(el);
      } else {
          if (el == '--double-next' ){
              if (typeof arr[index+1] == 'number'){
                  transformArr.push(arr[index+1]);
              }
          }
          if (el == '--double-prev') {
              if (typeof arr[index-1] == 'number'){
                  transformArr.push(arr[index-1]);
              }
          }
          if (el == '--discard-prev') {
                  transformArr.pop();
          }
          if (el == '--discard-next') {
              arr[index+1]='abracadabra';
          }
      }
  });
  return transformArr.filter((el)=> el !== 'abracadabra');
}

module.exports = {
  transform
};
