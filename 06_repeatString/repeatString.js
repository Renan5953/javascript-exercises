const repeatString = function(string, num) {
    const result = [];
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            result.push(string);
        }
        return result.join("");
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
