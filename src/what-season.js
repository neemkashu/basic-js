const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) { 
    if (date === undefined) return 'Unable to determine the time of year!';
   
    if (! isDate(date) ) throw new Error('Invalid date!');


    const month = date.getMonth();
    if (month < 2 || month == 11) return 'winter';
    if (month > 1 && month <=4) return 'spring';
    if (month > 4 && month <= 7) return 'summer';
    return 'autumn';

    function isDate (date) {
        let myDate = new Date;
        const myDateProtoArr = Object.getOwnPropertyNames(Object.getPrototypeOf(myDate));
        const fakeDateProtoArr = Object.getOwnPropertyNames(Object.getPrototypeOf(date));
        if ( ! (date instanceof Date)) return false;
        if ( ! (Object.prototype.toString.call(date) === "[object Date]") ) return false;

        for (let i = 0; i < myDateProtoArr.length; i++) {
            if (myDateProtoArr[i] !== fakeDateProtoArr[i]) return false;
        }
        try {
            date.getUTCDate();
        }
        catch (err) {
            return false;
        }

        return true;
    }
}

module.exports = {
  getSeason
};
