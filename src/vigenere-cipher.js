const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor (isDirect = true) {
        if (isDirect) {
            this.machinetype = 'direct';
        } else {
            this.machinetype = 'inverse';
        }
    }
    encrypt(messageStr, keyStr) {
        if ((arguments.length < 2)  ||
            (messageStr === undefined) ||
            (keyStr === undefined)
        )  {
            throw new Error('Incorrect arguments!');
        }

        const message = messageStr.toUpperCase().split('');
        const key = keyStr.toUpperCase().split('');
        
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (! isCapLetter(message[i])) continue;

            message[i] = encryptChar(message[i], key[j]);
            j = (j + 1) % key.length;

        }
        if (this.machinetype === 'inverse') message.reverse();

        return message.join('');

        function encryptChar(M, K){
            const m = M.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            const k = K.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            
            const c = (m + k) % 26; // wikipedia formula
            return String.fromCharCode(c + 'A'.charCodeAt(0));
        }

        function isCapLetter (char) {
            const code = char.charCodeAt(0) - 'A'.charCodeAt(0);
            return ((code >= 0) && (code < 26));
        }
    }
    decrypt(ciphredStr, keyStr) {
        if ((arguments.length < 2)  ||
            (ciphredStr === undefined) ||
            (keyStr === undefined)
        ) {
            throw new Error('Incorrect arguments!');
        }

        const ciphred = ciphredStr.toUpperCase().split('');
        const key = keyStr.toUpperCase().split('');

        let j = 0;
        for (let i = 0; i < ciphred.length; i++) {
            if (! isCapLetter(ciphred[i])) continue;

            ciphred[i] = decryptChar(ciphred[i], key[j]);
            j = (j + 1) % key.length;

        }
        if (this.machinetype === 'inverse') ciphred.reverse();

        return ciphred.join('');

        function decryptChar(C, K){
            const c = C.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            const k = K.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            
            const m = ((c - k) > 0? c - k : c - k + 26) % 26; // wikipedia formula
            return String.fromCharCode(m + 'A'.charCodeAt(0));
        }

        function isCapLetter (char) {
            const code = char.charCodeAt(0) - 'A'.charCodeAt(0);
            return ((code >= 0) && (code < 26));
        }
        
    }
}


module.exports = {
  VigenereCipheringMachine
};
