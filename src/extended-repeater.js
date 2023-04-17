const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if (options.addition === undefined) {
      options.addition = '';
  }
  if (options.separator === undefined) {
      options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
      options.additionSeparator = '|';
  }
  if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  }
  if (typeof str !== 'string'){
      str = String (str);
  }
  if (typeof options.addition !== 'string'){
      options.addition = String (options.addition);
  }
  let additionArr = [];
  let strArr = [];
  for (let index = 0; index < options.additionRepeatTimes; index++) {
      additionArr.push(options.addition);
  }
  additionArr = additionArr.join(options.additionSeparator);
  for (let index = 0; index < options.repeatTimes; index++) {
      strArr.push(str+additionArr);
  }
  return strArr.join(options.separator);
}

module.exports = {
  repeater
};
