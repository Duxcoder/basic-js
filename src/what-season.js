const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = '') {
  try {
    const month = ['winter', 'spring', 'summer', 'autumn'];
    const transformNumToMonth = (num) => {
      switch (true) {
        case num < 2: return month[0];
        case num < 5: return month[1];
        case num < 8: return month[2];
        case num < 11: return month[3];
        case num === 11: return month[0];
      }
    }
    if (date === '') return 'Unable to determine the time of year!'
    if(!(date instanceof Date && !isNaN(date))){
      throw new Error("Invalid date!")
    }
    return transformNumToMonth(date.getMonth())
  } catch (err) {
    throw new Error("Invalid date!")
  }
}

module.exports = {
  getSeason
};
