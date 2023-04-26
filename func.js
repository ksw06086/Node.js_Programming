// 구조분해 할당
const {odd, even} = require('./var');

function checkOtherNumber(number){
    if(number % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOtherNumber;