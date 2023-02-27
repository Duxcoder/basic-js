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

  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`) 
  const isDiscard = item => item === '--discard-next' || item === '--discard-prev'
  const isDouble = item => item === '--double-next' ||  item === '--double-prev'

  const newArr = arr.reduce((createArr, item, i) => {
    let prevValue = createArr[createArr.length - 1]
    if (isDouble(prevValue)) {
      createArr[createArr.length - 1] = prevValue === '--double-next' ? item : createArr.at(-2);
      createArr.push(item)
      return createArr
    }
    if (isDiscard(item) || isDouble(item)){
      if (item === arr.at(-1)) return createArr
    }
    if (isDiscard(prevValue)) {
      createArr[createArr.length - 1] = 'delete'
      if (prevValue === '--discard-next') {
          createArr.push('delete')
          return createArr
      } else {
        createArr[createArr.length - 2] = 'delete'
        createArr.push(item)
        return createArr
      }
    }
    createArr.push(item)
    return createArr
  }, [])
  return newArr.filter(item => item !== 'delete' && item !== undefined)
}

module.exports = {
  transform
};
