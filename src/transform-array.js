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

    // let debugCount = 2;
    // for (let i = 0; i < arr.length; i++) {
    //    if (typeof arr[i] === 'object' && arr[i].foo === 'bar' && debugCount < 8) {
    //             // const fs = require('fs');
    //             // fs.writeFile(`D:/JavaScriptStudy/sandboxJS/${debugCount}.txt`, JSON.stringify(arrIn), function(err) {
    //             //     if(err) {
    //             //         return console.log(err);
    //             //     }
                
    //             // }); 
    //             console.debug(arrIn);
    //         debugCount++;
    //         break;
    //     }
    // }
    
    let i = 0;
    while (i < arr.length) {
        const prev = arr[i - 1];
        const current = arr[i];
        const next = arr[i + 1];

        switch (current) {
            case '--double-next': {
                if ((!(Number.isNaN(next))) && (next !== undefined) && ( !controls.includes(next))) {
                    arr.splice(i + 1, 0, next);
                    i++;
                }
                i++;
            }               
            break;
            case '--double-prev': {
                if ((!Number.isNaN(prev)) && (prev !== undefined) && ( !controls.includes(prev))) {
                    arr.splice(i - 1, 0, prev);
                    i += 2;
                }
                i++;
            }               
            break;
            case '--discard-next': {
                if ((!Number.isNaN(next)) && (next !== undefined) && ( !controls.includes(next))) {
                    arr.splice(i + 1, 1);
                    i++;
                }
                i++;
            }               
            break;
            case '--discard-prev': {
                if ((!Number.isNaN(prev)) && (prev !== undefined) && ( !controls.includes(prev))) {
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
