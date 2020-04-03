'use strict'

// function test(data) {
//   data--;
//   console.log(data);

//   if (data>0) {
//     test(data);
//   }
// }
// test(10);

function corner(time, minute) {
  return 30 * time - ( 11 * minute / 2 );
}
console.log(Math.abs(corner(3, 30)));


// for (let i = 0; i < 5; ++i){
//   if (i === 2) {
//     break;
//   }
//   console.log(i);
// }




// function one(callback) {
//   console.log('сделать запрос');
//   setTimeout(function(){
//     console.log('получить данные');
//   }, 1000);
//   setTimeout(function(){
//     callback();
//   }, 2000);
// }


// one(two);


// function two() {
//   console.log('отобразить');
// }

// //детерминированная функция зависит от данных

// function res(w, e) {
//   const sum = w * e;
//   return sum;
// }

// console.log(res(3, 4));
// console.log(res(6, 4));
// console.log(res(7, 8));
// console.log(res(8, 4));