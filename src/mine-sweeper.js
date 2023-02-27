const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((arrRow, iRow) => {
    return arrRow.map((cell, iCell) => {
      let count = 0
      if (arrRow[iCell - 1] === true) count++
      if (arrRow[iCell + 1] === true) count++
      if (iRow > 0){
          if (matrix[iRow - 1][iCell - 1] === true) count++
          if (matrix[iRow - 1][iCell] === true) count++
          if (matrix[iRow - 1][iCell + 1] === true) count++
      }
      if (iRow < matrix.length - 1){
          if (matrix[iRow + 1][iCell - 1] ===true) count++
          if (matrix[iRow + 1][iCell] === true) count++
          if (matrix[iRow + 1][iCell + 1] === true) count++
      }
      return count
    })
  })
}

module.exports = {
  minesweeper
};
