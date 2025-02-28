function caesarCipher(string, shiftFactor) {
    let returnString = "";

    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        charCode = newCharCode(charCode, shiftFactor);
        returnString += String.fromCharCode(charCode);
    }
    return returnString;
}

function newCharCode(charCode, shiftFactor) {
    const indexForLower = 97;
    const indexForUpper = 65;

    //if lowercase a-z
    if (charCode >= indexForLower && charCode < indexForLower + 26) {
        return ((charCode - indexForLower + shiftFactor) % 26)
         + indexForLower;
    } //if uppercase A-Z
    else if (charCode >= indexForUpper && charCode < indexForUpper + 26) {
        return ((charCode - indexForUpper + shiftFactor) % 26)
         + indexForUpper;
    }
    else return charCode;
}

module.exports = caesarCipher;
