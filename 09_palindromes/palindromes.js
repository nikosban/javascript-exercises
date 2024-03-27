const palindromes = function (str) {

    let re = /[\W]/g;
    let lowerStr = str.toLowerCase().replace(re, '');
    let reversedString = lowerStr.split('').reverse('').join('');
    
    if (reversedString === lowerStr) {
        return true
    }
    else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
