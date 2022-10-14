const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
    const mines = new Array(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        const topRow = matrix[i - 1];
        const row = matrix[i];
        const bottomRow = matrix[i + 1];
        mines[i] = new Array(row.length);
        for (let j = 0; j < row.length; j++) {
            let number = 0;
            if (topRow) number = findSum(topRow, j);
            number += findSum(row, j) - toNumber(row[j]);
            if (bottomRow) number += findSum(bottomRow, j);
            mines[i][j] = number;      
        }
    }

    function toNumber(cell) {
        if (cell === undefined) return 0;
        return cell? 1 : 0;
    }
    function findSum (row, index){
         let sum = toNumber(row[index - 1])
         + toNumber(row [index]) 
         + toNumber(row [index + 1]);
         return sum;
    }
    return mines;
}

module.exports = {
  minesweeper
};
