const leapYears = function(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 ===0);
}

console.log(leapYears(1996));

module.exports = leapYears
