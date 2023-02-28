const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let count = 0;
  let newRowArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newRowArr.push([]);
  }
  // колонки в строки
  matrix.forEach((row) => {
    row.forEach((item, j) => {
      newRowArr[j].push(item)
    })
  })
  // складываем элементы каждой строки доходя до 0
  newRowArr.forEach(row => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) break
      count += row[i];
    }
  })
  return count
}

module.exports = {
  getMatrixElementsSum
};
