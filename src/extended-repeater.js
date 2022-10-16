const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
    options = optionsChecker(options);
    if (typeof str !== 'string') str = String(str);
    if (typeof options.addition !== 'string') options.addition = String(options.addition);

    let addCell = new Array(options.additionRepeatTimes);

    const additionTotal = addCell.fill('').map( (element) => element = options.addition).join(options.additionSeparator);

    let strCell = new Array(options.repeatTimes);
    const strTotal = strCell.fill('').map( (element) => element = str + additionTotal).join(options.separator);

    return strTotal;

    function optionsChecker(options) {
        if (!('repeatTimes' in options)) options.repeatTimes = 1;
        if (!('separator' in options)) options.separator = '+';
        if (!('addition' in options)) options.addition = '';
        if (!('additionRepeatTimes' in options)) options.additionRepeatTimes = 1;
        if (!('additionSeparator' in options)) options.additionSeparator = '|';
        return options;        
    }
}

module.exports = {
  repeater
};
