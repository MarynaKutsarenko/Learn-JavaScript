let num = (Array.from('266219'));

let result = num.reduce(function (total, item) {

  return (total * item);

}, 1);

result **= 3;



/*
let result2 = result.slice(0, 2);

console.log(result);
console.log(result2);

let sw = [1, 2, 4, 5];

let sw2 = sw.slice(0, 2);

console.log(sw2);
*/