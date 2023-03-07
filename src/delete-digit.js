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
  let maxNum = 0;
  let num
  for (let i = 0; i < n.toString().length; i++) {
    num = n.toString().split('').filter((num, index) => i != index).join('')
    if (num > maxNum) maxNum = +num
  }
  return maxNum
}

module.exports = {
  deleteDigit
};
