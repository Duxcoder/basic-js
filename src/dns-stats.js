const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map(item => item.split('.').reverse())
  let result = {}
  const searchCount = (value) => {
    let count = 0
    arr.forEach(item => item.includes(value) ? count++ : null)
    return count
  }
  for (let i = 0; i < arr.length; i++) {
    let newString = ''
    arr[i].forEach(item => {
      newString += '.' + item
      result[newString] = searchCount(item)
    })
  }
  return result
}


module.exports = {
  getDNSStats
};
