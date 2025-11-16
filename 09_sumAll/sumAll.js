const sumAll = function(n1, n2) {
    const argArray = [n1, n2];
    if (!argArray.every(item => Number.isInteger(item) && item >= 0)) {
        return 'ERROR';
    }
    argArray.sort((a, b) => a - b);
    let result = 0;
    for (let i = argArray[0]; i <= argArray[1]; i++) {
        result += i;
    }
    return result;
}
// Do not edit below this line
module.exports = sumAll;
