const ftoc = function(num) {
  let cel = (num - 32 ) * (5/9);
  return (Math.round(cel * 10 ) /10);
}

const ctof = function(num) {
  let f = (num * (9/5)) + 32;
  return (Math.round(f * 10) / 10);
}

// console.log(ftoc(31));
// console.log(ctof(0));
module.exports = {
  ftoc,
  ctof
}
