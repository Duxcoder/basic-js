const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse; }
encrypt (str, secret) {
  if (str === undefined ||
    secret === undefined ||
    str === null ||
    secret === null ) {
    throw new Error('Incorrect arguments!')
  }
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    let i = 0
    do {
        secret += secret[i]
        i++
    } while (str.length > secret.length)


    str.split('').forEach((item, i) => {
        let newSecret = secret.split('')
        if(!alphabet.includes(item.toLowerCase())){
            newSecret.splice(i, 0, item)
        }
        secret = newSecret.join('')
    })
    secret = secret.slice(0, str.length)
    let result = new Array(str.length - 1)
    const createUpperCaseArr = (str) => str.split('').map(item => item.toUpperCase())
    const arrStr = createUpperCaseArr(str);
    const arrSecret = createUpperCaseArr(secret);

    const searchIndexAlphabet = (arr) => {
        arr.forEach((item, i) => {
            if (i in result) {
                if (typeof result[i] !== 'number') { result[i] = item} else {
                result[i] += +alphabet.findIndex(letter => letter.toUpperCase() === item)}
            } else {
                if (!alphabet.includes(item.toLowerCase())){
                     result[i] = item.toString()
                } else {
                result[i] = +alphabet.findIndex(letter => letter.toUpperCase() === item)}
            }
        })
    }

    searchIndexAlphabet(arrStr);
    searchIndexAlphabet(arrSecret);

    let ret = result.map(item => {
        if (typeof item === 'string') return item
        return alphabet[item % alphabet.length].toUpperCase()
    })
    return this.reverse ? ret.join('') : ret.reverse().join('')
}
  decrypt(str, secret) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (str === undefined ||
      secret === undefined ||
      str === null ||
      secret === null ) {
      throw new Error('Incorrect arguments!')
    }

  let i = 0
    do {
        secret += secret[i]
        i++
    } while (str.length > secret.length)


    str.split('').forEach((item, i) => {
        let newSecret = secret.split('')
        if(!alphabet.includes(item.toLowerCase())){
            newSecret.splice(i, 0, item)
        }
        secret = newSecret.join('')
    })
    secret = secret.slice(0, str.length)
    let result = new Array(str.length - 1)
    const createUpperCaseArr = (str) => str.split('').map(item => item.toUpperCase())
    const arrStr = createUpperCaseArr(str);
    const arrSecret = createUpperCaseArr(secret);

    const searchIndexAlphabet = (arr) => {
        arr.forEach((item, i) => {
            if (i in result) {
                if (typeof result[i] !== 'number') { result[i] = item} else {
                result[i] -= +alphabet.findIndex(letter => letter.toUpperCase() === item)
                if (result[i] < 0) result[i] += alphabet.length
            }
            } else {
                if (!alphabet.includes(item.toLowerCase())){
                     result[i] = item.toString()
                } else {
                result[i] = +alphabet.findIndex(letter => letter.toUpperCase() === item)}
            }
        })
    }

    searchIndexAlphabet(arrStr);
    searchIndexAlphabet(arrSecret);
    let ret = result.map(item => {
        if (typeof item === 'string') return item
        return alphabet[item].toUpperCase()
    })
    return this.reverse ? ret.join('') : ret.reverse().join('')
}
}

module.exports = {
  VigenereCipheringMachine
};
