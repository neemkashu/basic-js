const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chainArr: [],
    getLength() {
        let len = this.chainArr.length;
        this.chainArr = [];
     //   delete chainMaker;
        return len;
    },
    addLink( value = '') {
        //if (`${value}` === 'function () { }')  console.debug(value, this.chainArr, 'addLink');
        this.chainArr.push(` ${value}${value === ''? '' : ' '}`);
        return this;
    },
    removeLink( position, ...args ) {
        //if (this.chainArr[0].toString() === 'function () { }')  console.debug(this.chainArr, ' remove ', position);
        if (!Number.isInteger(position) ||
         (position < 1) ||
          (position > this.chainArr.length) ) {
            //console.debug(position, this.chainArr.length);
            this.chainArr = [];
           // delete chainMaker;
            throw new Error("You can't remove incorrect link!");
        }
        // args.forEach( (element) => element = undefined);
        this.chainArr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        //if (this.chainArr[0].toString() === 'function () { }')  console.debug(this.chainArr, 'reverse');
        this.chainArr.reverse();
        return this;
    },
    finishChain() {
        //if (this.chainArr[0].toString() === 'function () { }')  console.debug(this.chainArr, 'finish');
        let strOut = `(${this.chainArr.join(')~~(')})`;
        this.chainArr = [];
        //delete chainMaker;
        return strOut;
    }
};
//let myChain = chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
//console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
module.exports = {
  chainMaker
};
