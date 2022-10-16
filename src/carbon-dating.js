const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15; // A_0
const HALF_LIFE_PERIOD = 5730; // t_{1/2} = ln 2 / k

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivityStr) { // A
    if (typeof sampleActivityStr !== 'string') return false;
    const sampleActivity = Number(sampleActivityStr);
    if (!isValidActivity(sampleActivity)) return false;

    let k = Math.LN2 / HALF_LIFE_PERIOD;
    const date =  Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    return date;

    function isValidActivity(sampleActivity) {
        if ( isNaN(sampleActivity) ) return false;
        if (sampleActivity > MODERN_ACTIVITY) return false;
        if (sampleActivity <= 0) return false;
        return true;
    }
}

module.exports = {
  dateSample
};
