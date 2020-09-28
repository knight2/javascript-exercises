const repeatString = function(str, num) {
    toReturn = '';
    if (num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        toReturn += str;
    }
    return toReturn;
}

module.exports = repeatString
