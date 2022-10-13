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
function transform( arrIn ) {
    if (! Array.isArray(arrIn)) throw new Error("'arr' parameter must be an instance of the Array!");
    const controls = ['--double-next','--double-prev','--discard-next','--discard-prev'];
    let arr = arrIn.slice();
    
    let i = 0;
    while (i < arr.length) {
        const prev = arr[i - 1];
        const current = arr[i];
        const next = arr[i + 1];

        switch (current) {
            case '--double-next': {
                if (!isNaN(next) && (next !== undefined) && ( !controls.includes(next))) {
                    arr.splice(i + 1, 0, next);
                    i++;
                }
                i++;
            }               
            break;
            case '--double-prev': {
                if (!isNaN(prev) && (prev !== undefined) && ( !controls.includes(prev))) {
                    arr.splice(i - 1, 0, prev);
                    i += 2;
                }
                i++;
            }               
            break;
            case '--discard-next': {
                if (!isNaN(next) && (next !== undefined) && ( !controls.includes(next))) {
                    arr.splice(i + 1, 1);
                    i++;
                }
                i++;
            }               
            break;
            case '--discard-prev': {
                if (!isNaN(prev) && (prev !== undefined) && ( !controls.includes(prev))) {
                    arr.splice(i - 1, 1);
                }
                i++;
            }               
            break;
        
            default: {
                i++;
            }
        }
    }
    return arr.filter((element) => !controls.includes(element));
    
}

module.exports = {
  transform
};
