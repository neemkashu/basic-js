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

    calculateDepth( arrIn ) {
        let maxDepth = 0;       
        
        function findDepth(arrIn, depth) {
            maxDepth = Math.max(maxDepth, depth);
            for (let i = 0; i < arrIn.length; i++) {
                if ( Array.isArray(arrIn[i]) ) {
                    findDepth(arrIn[i], depth + 1);   
                }       
            }
        }
        findDepth(arrIn, 1);

        return maxDepth; 
    }
}
// const depthCalc = new DepthCalculator();
//console.log( depthCalc.calculateDepth([1, 2, 3, 4, 5]),
//depthCalc.calculateDepth([1, 2, 3, [4, 5]]),
//console.log(depthCalc.calculateDepth([[[],[[]]]]));


module.exports = {
  DepthCalculator
};
