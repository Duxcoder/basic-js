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
function repeater(str, options = {}) {
  const {
    separator = '+',
    addition = '',
    additionSeparator = '|',
    additionRepeatTimes = 1,
    repeatTimes = 1
  } = options
  const createArr = (repeat, fill, separ) => new Array(repeat).fill(fill + '').join(separ)
  const addit = createArr(additionRepeatTimes, addition, additionSeparator);
  const main = createArr(repeatTimes, str + addit, separator);
  return main

  // let addit = []
  // addit.length = additionRepeatTimes;
  // addit.fill(addition);
  // addit = addit.join(additionSeparator);
  // let main = []
  // main.length = repeatTimes;
  // main.fill(str + addit);
  // main = main.join(separator);
  // return main
}

module.exports = {
  repeater
};
