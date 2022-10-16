const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
    let map1 = makeMap(s1);
    let commonCount = 0;
    for (const char of s2) {
        if ( map1.has(char) ) {
            commonCount++;
            map1.set(char, map1.get(char) - 1);
            if (map1.get(char) === 0) map1.delete(char);
        }
    }
    return commonCount;

    function makeMap(str) {
        let map = new Map;
        for (let char of str) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
        return map;
    }
}

module.exports = {
  getCommonCharacterCount
};
