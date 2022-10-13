const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
    // use map so if fast the original array laso changes
    let mapNames = new Map;

    return names.map( (name) => {
        if (mapNames.has(name)) {
            const count = mapNames.get(name);
            mapNames.set(name, count + 1);
            name = name + `(${count})`;
            mapNames.set(name, 1);
        } else {
            mapNames.set(name, 1);
        }
        return name;
    });
}

module.exports = {
  renameFiles
};
