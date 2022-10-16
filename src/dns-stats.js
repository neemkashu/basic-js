const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let domMap = new Map;
    for (let site of domains) {
        site.split('.').reverse().map((subdomain, i, sites) => {
            if (i > 0) addToMap(domMap, `.${sites.slice(0,i).join('.')}.${subdomain}`);
            else addToMap(domMap, `.${subdomain}`);
        });

    }
    return Object.fromEntries(domMap);

    function addToMap(map, key) {
        if ( map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else map.set(key, 1);
    }
}
//console.log(getDNSStats(['epam.com', 'info.epam.com']));
module.exports = {
  getDNSStats
};
