const sumAll = function(a,b) {
    if (typeof a != 'number' || typeof b != 'number'){
        return 'ERROR';
    }
    if (a < 0 || b < 0){
        return 'ERROR'
    }

    let smallest = 0;
    let largest = 0;
    if (a > b){
         smallest = b;
         largest = a;
    } else if ( a == b){
        return a + b;
    }
        else{
        smallest = a;
        largest = b;
    }

    let sum = 0;
    for (let i = smallest; i <= largest; i++){
        sum += i;
    }
    
    return sum;
}

module.exports = sumAll
