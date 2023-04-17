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
  constructor(value=true) {
  this.direct = value;
  this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}
encrypt(data,cipher) {
    if (data === undefined || cipher === undefined){
        throw new Error (`Incorrect arguments!`);
    }
    data=data.toUpperCase().split('');
    //console.log('data',data)
    cipher = cipher.toUpperCase().split('');
    let values = [];
    for (let index = 0; index < data.length; index++) {
        let codeIndx = this.alphabet.findIndex((el)=>{
            return el == data[index];
        })
            values.push(codeIndx);
    }
    //console.log('values',values);
    let cipherValues = [];
    for (let index = 0; index < cipher.length; index++) {
        let codeIndx = this.alphabet.findIndex((el)=>{
            return el == cipher[index];
        })
        if(codeIndx >= 0) {
            cipherValues.push(codeIndx);
        }
    }
    //console.log('cipherValues',cipherValues)
    let streamKeys =[];
    let i = 0;
    let j = 0;
    while (streamKeys.length < values.length) {
        if (i>=cipherValues.length){
            i = 0;
        }
        if (values[j]>=0){
            streamKeys.push(cipherValues[i])
                i++;
        }else {
            streamKeys.push(null);
        }
         j++;
    }
    //console.log('streamKeys',streamKeys)
    let newValues = [];
    streamKeys.forEach ((el,indx) => {
        newValues.push((el + values[indx])%26);
    })
    //console.log('newValues',newValues);
    let finalCode = [];
    for (let index = 0; index < newValues.length; index++) {
        let codeIndx = this.alphabet.find((el,indx)=>{
            return indx == newValues[index];
        })
        finalCode.push(codeIndx);
    }
    //console.log('final',finalCode);
    finalCode =finalCode.map((el,indx)=>{
        if (el === undefined) {
            return el = data[indx];
        } else {
            return el;
        }
    })
    //console.log('final2',finalCode);
    if (this.direct == false) {
        finalCode = finalCode.reverse();
    }
    return finalCode.join('');
}

decrypt(data,cipher) {
    if (data === undefined || cipher === undefined){
        throw new Error (`Incorrect arguments!`);
    }
    data=data.toUpperCase().split('');
    //console.log('data',data)
    cipher = cipher.toUpperCase().split('');
    let values = [];
    for (let index = 0; index < data.length; index++) {
        let codeIndx = this.alphabet.findIndex((el)=>{
            return el == data[index];
        })
            values.push(codeIndx);
    }
    //console.log('values',values);
    let cipherValues = [];
    for (let index = 0; index < cipher.length; index++) {
        let codeIndx = this.alphabet.findIndex((el)=>{
            return el == cipher[index];
        })
        if(codeIndx >= 0) {
            cipherValues.push(codeIndx);
        }
    }
    //console.log('cipherValues',cipherValues)
    let streamKeys =[];
    let i = 0;
    let j = 0;
    while (streamKeys.length < values.length) {
        if (i>=cipherValues.length){
            i = 0;
        }
        if (values[j]>=0){
            streamKeys.push(cipherValues[i])
                i++;
        }else {
            streamKeys.push(NaN);
        }
         j++;
    }
    //console.log('streamKeys',streamKeys)
    let newValues = [];
    streamKeys.forEach ((el,indx) => {
        let k ;
        if ((values[indx] - el) < 0){
            k = ((values[indx] - el) + 26)%26;
        } else {
            k = ((values[indx] - el))%26
        }
        newValues.push(k);
    })
    //console.log('newValues',newValues);
    let finalCode = [];
    for (let index = 0; index < newValues.length; index++) {
        let codeIndx = this.alphabet.find((el,indx)=>{
            return indx == newValues[index];
        })
        finalCode.push(codeIndx);
    }
    //console.log('final',finalCode);
    finalCode =finalCode.map((el,indx)=>{
        if (el === undefined) {
            return el = data[indx];
        } else {
            return el;
        }
    })
    //console.log('final2',finalCode);
    if (this.direct == false) {
        finalCode = finalCode.reverse();
    }
    return finalCode.join('');
}
}

module.exports = {
  VigenereCipheringMachine
};
