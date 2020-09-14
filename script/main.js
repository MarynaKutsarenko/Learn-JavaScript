'use strict';

// let arr = [1,2,3,4,5];
// let sum = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr.reduce(sum), arr.length);

// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс',};
// console.log(obj[3]);

// let arr = [2,4,1,5,3,6];
// let result = 0; 
// function isSmaller(item) {
//   if ((arr.length - 1) <= item){
//     return true;
//   }
//   result++;
//   return false;
// }
// let result2 = arr.filter(isSmaller);
// console.log(result2);
// console.log(result);

// function test(data) {

//   data--;
//   console.log(data);

//   if (data>0) {
//     test(data);
//   }
// }
// test(10);

// function corner(time, minute) {
//   return 30 * time - ( 11 * minute / 2 );
// }
// console.log(Math.abs(corner(3, 30)));

// let arra =  ['пн', 'вт','ср', 'чт', 'пт', 'сб', 'вс'];
// let day = 'чт';
// for (let i = 0; i < arra.length; i++) {
//   if (arra[i] == 'сб' || arra[i] == 'вс' || arra[i] == day) {
//     document.write(`<p><b>${arra[i]}</b></p>`);
// } else {
//     document.write(`<p>${arra[i]}</p>`);
//   }
// }
  
// console.log(arra);

// let q = [10, 20, 30, 50, 235, 3000];
//     q = q.toString().split(',');

//     for (let i = 0; i < q.length; i++) {
//       if (q[i].startsWith('1') || q[i].startsWith('3') || q[i].startsWith('5')) {
//         console.log(+q[i]);
//       }
//     }

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr2 = [];
// let we = [];
// for (const key in obj) {
//   we.push(obj[key]);
// }
// we = String(we).split(',');
// for (let key in we) {
//   if (we[key].startsWith('1') || we[key].startsWith('2')) {
//     arr2.push(we[key]);
//   }
// }
// result = result.map(function(item){ функция кот преодразует массив строк в массив чисел
//   let number = parseInt(item);
//   return isNaN(number)? item : number;
// });
// console.log(we, arr2);
// let arr2 = ['a', 'b', 'c', 'a', 'a', 'b','a', 'b', 'a', 'a', 'b'];
// let count = {};
// for (const item of arr2) {
//   if (count[item] === undefined) {
//     count[item] = 1;
//   } else {
//     count[item]++;
//   }
// }
// console.log(count);

// let arr = [[3, 5], [5, 4]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);

// let arr =  [[[1, 2], [3, 4]], [[5, 6]]];
// let sum = 0;
// for (const i of arr) {
//   for (const j of i) {
//     for (const k of j) {
//       sum += k;
//     }
//   }
// }
// console.log(sum);
// let array = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
// let arr = [];

// function func(num){
//   let i = 1;
//   while (true) {
//   num =  num / 2;

//     if (num < 10) {
//       return i;
//     }
//     i++;
//   }
// }
// let arr = [12, 19, 28, 101, 14, 345];
// let newArr = [];

// for (let i = 0; i < 10; i++) {
//   if (inRage(arr[i])) {
//     newArr.push(arr[i]); 
//   }
  
// }

// function inRage(num) {
//   let sum = getSumArr(getDigit(num));

//   if (sum >=1 && sum <=9) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getDigit(num) {
//   return String(num).split('');
// }

// function getSumArr(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);  
//   }
//   return sum;
// }

// console.log(newArr);
// function getDigitSum(num) {
//   return String(num).split('');
// }
// function getSum(arr) {
//   let sum = 0;

//   for (const item of arr) {
//    sum += +item
//   }
//   return sum;
// }
// console.log(getSum(getDigitSum(34)));

// const names = ['vladimir', 'Mark', 'mary', 'kate'];

// names.forEach(function(item, i, arr){
//   arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// });

// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
  
// }

// const correctName = names.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
// console.log(names);
//let age = 32;
//age = (eval(age.toString().split('').join('+')));  
let firstInput = document.querySelector('.first');
let secondInput = document.querySelector('.second');
let showResultInput = document.querySelector('.show');
let start = document.querySelector('.getSum');
let stop = document.querySelector('.getMult');
let link = document.querySelector('.link');
let image = document.querySelector('img');

image.width = 300;

let dev = 'new';
let str = 'word1 word2 word3';

let words = str.split(' ');

console.log(words);