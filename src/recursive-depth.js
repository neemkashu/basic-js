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

    calculateDepth( arrIn, depth = 1 ) {
        this.maxDepth = (this.maxDepth)? this.maxDepth: 0;

        for (let i = 0; i < arrIn.length; i++) {
            if ( Array.isArray(arrIn[i]) ) {
                this.maxDepth = this.calculateDepth(arrIn[i], depth + 1);   
            }
        }  
           
        let maxDelete = this.maxDepth;
        this.maxDepth = 0;
        return Math.max(maxDelete, depth); 
    }
}
const depthCalc = new DepthCalculator();


module.exports = {
  DepthCalculator
};
