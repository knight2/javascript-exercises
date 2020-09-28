const repeatString = function(str, num) {
    toReturn = '';
    for (let i = 0; i < num; i++){
        toReturn += str;
    }
    return toReturn;
}

module.exports = repeatString
