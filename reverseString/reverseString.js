const reverseString = function(str) {
    let strArr = str.split('');
    let newStr = '';
    for(let i = strArr.length -1; i >=0; i--){
        newStr += strArr[i];
    }
    //console.log(newStr);

    return newStr;
}


module.exports = reverseString
