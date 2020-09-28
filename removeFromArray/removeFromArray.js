const removeFromArray = function(arr, ...theArgs) {
    let newArr = arr;

    //console.log(newArr);
    for (let i = 0; i < theArgs.length; i++){
        let index = newArr.indexOf(theArgs[i]);
        if (index != -1){
            newArr.splice(index, 1);
        }
        //console.log(newArr);
    }
    //console.log(newArr);
}

//removeFromArray([1,2,3, 'hello'], 1,2,3,'hello');

module.exports = removeFromArray
