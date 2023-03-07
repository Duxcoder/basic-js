const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  body: [],
  getLength() {
    this.body.length
    return this
  },
  addLink(value ) {
    if (value === null) value = 'null'
    this.body.push(`( ${value.toString()} )`)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
        position < 1 ||
        position > this.body.length ){
      this.body = []
      throw new Error (`You can't remove incorrect link!`)
    }
    this.body.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.body.reverse()
    return this
  },
  finishChain() {
    let tmp = Array.from(this.body)
    this.body = []
    return tmp.join('~~')
  }
};

module.exports = {
  chainMaker
};
