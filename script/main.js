
let num = 266219,
    arr = num.toString().split(''),
    power ;

let mult = arr.reduce(function (total, item) {
  return (total * item);
}, 1);

power = mult ** 3;

cut = (power.toString().substring(0, 2));

console.log(cut)
console.log(mult);
console.log(power);
