const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!this.hasOwnProperty('count')){
        this.count = 0;
    }
    if (arr.some((el)=>Array.isArray(el))){
        this.count++;
        arr = arr.flat();
        return this.calculateDepth(arr);
    } else {
        this.count++;
        let a = this.count;
        this.count = 0;
        return a;
    }
  }
}

module.exports = {
  DepthCalculator
};
