const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
    const arr = Array.from(str);
    let strOut = [];
    prevChar = arr[0];
    countChar = 0;
    for (const char of arr) {
      if ( prevChar === char) {
        countChar++;
      } else {
        let pushCount = countChar > 1? countChar : '';
        strOut.push(pushCount, prevChar);
        prevChar = char;
        countChar = 1;
      }
    }
    if ( prevChar !== arr.at[-1]) {
      let pushCount = countChar > 1? countChar : '';
      strOut.push(pushCount, prevChar);
    }

    strOut = strOut.join('');
    return strOut;
}
console.log(encodeLine('abbcca'));
module.exports = {
  encodeLine
};
