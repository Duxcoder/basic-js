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
  constructor(){
    this.count = 0;
    this.depth = []
  }
  calculateDepth(arr, c) {
      if (c === undefined) {
          this.depth = [];
          this.count = 0;
          c = this.count
      }
      if (Array.isArray(arr)) {
          c++
      }
     this.depth.push(c)
    arr.forEach((item, i) => {
      if (Array.isArray(item)) {
        this.calculateDepth(item, c)
      } else {
      //   this.depth.push(c)
      }
    })
    return Math.max.apply(null, this.depth);
  }


}

module.exports = {
  DepthCalculator
};
