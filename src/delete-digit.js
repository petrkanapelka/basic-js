const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n=n.toString().split('')
    let array = [];
    for (let index = 0; index < n.length; index++) {
        let a = [...n];
        a.splice(index,1);
        array.push (+a.join(''))
    }
    return Math.max(...array)
}

module.exports = {
  deleteDigit
};
