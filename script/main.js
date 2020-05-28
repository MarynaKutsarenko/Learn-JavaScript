'use strict'

// let arr = ['пн', 'вт', 'ср', 'чт', 'пн', 'сб', 'вс',];
// let sum = (accumulator, currentValue) => accumulator + currentValue;

// console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6]);
// console.log(arr.reduce(sum));

// let arr = [1,2,3,4,5];
// let sum = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr.reduce(sum), arr.length);

// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс',};
// console.log(obj[3]);

// let user = {name: 'Mary', surName: 'Kutsarenko', patronymic: 'Vladymirovna'};

// console.log(user.name + ' ' + user.surName);

// let date = {year: 2020, month: 'Aprial', day: 06};
// console.log(date.year + '-' + date.month + '-' + date.day);



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

let image = document.querySelector('img');

image.width = 300;



// let arr =  [10, 20, 30, 50, 235, 3000, 70];
// arr = arr.toString().split(',');
// console.log(arr);
// let arra =  ['пн', 'вт','ср', 'чт', 'пт', 'сб', 'вс'];
// let day = 'вт';
// for (let i = 0; i < arra.length; i++) {
//   if (arra[i] == 'сб' || arra[i] == 'вс') {
//     document.write(`<p><b>${arra[i]}</b></p>`);
// } else if (arra[i] == day) {
//   document.write(`<p><b>${arra[i]}</b></p>`);
// } else{
//     document.write(`<p>${arra[i]}</p>`);
//   }
// }
  
//   console.log(arra.reverse());

// let v = [ 'a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i <= v.length -1; i++){
//   console.log(v[i]);
// }
// let q = [10, 20, 30, 50, 235, 3000];
// q= q.toString().split(',');
// let res = 0;
// for (let i = 0; i < q.length; i++) {
//   if (q[i].startsWith('1') || q[i].startsWith('3') || q[i].startsWith('5')) {
//     console.log(q[i]);
//   }
// }
// console.log(q.reverse());
// let w = [1, 2, 3, 4, 5];
// let r = 0;
// for (const item of w) {
// r = r + item;
//   console.log(r)
// }

// let obj = {a: 1, b: 12, c: 3, d: 4, e: 13};
// let sm =0;
// for (const key in obj) {
//   sm += obj[key];
// }
// console.log(sm);

// for (let i = 0, j = 0; i < arra.length; i++, j += 2) {
//   console.log(i,j);
  
// }
// let mmm = 31;
// let result;
// let flag = true;
// for (let i = 0; i < mmm; i++) {
//   if (mmm % i == 0) {
//     flag = false;
//     break;
//   }
  
// }
// console.log(flag);
// let jer = 500;
// for (let i = 0; i < jer; i++) {
//   if (jer > 10) {
//     jer = jer / 2;
//   };
//   console.log(jer, i);
// }
// let df = '';
// for (let i = 1; i < 10; i++) {
 
//   df += i;
// }
// console.log(df.toString().split(''));
// let qa = [1,2,3,4,5];
// for (let i = 0; i < qa.length; i++) {
//   qa[i]+=10;
  
// }
// console.log(qa);
// let rg = [];
// for (let i = 0; i < 10; i++) {
// let j = Math.floor(Math.random() * (10 - 1)) + 1;
// rg.push(j);
// }
// console.log(rg);
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let yy =  {};
// let vvv = [1,2,3,4,5,6,7];
// for (let i = 0; i < 7; i++) {
// yy[arra[i]] = vvv[i];
// }
// console.log(yy)

// let values = [1, 2, 3, 4, 5];
// let ob = {};

// for (let i = 0; i <= 4; i++) {
// 	let key = keys[i];
// 	let value = values[i];
	
// 	ob[key] = value;
// }


// let arr1 = [];
// let arr2 = [];
// let ar = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let sum = 0;
// let sum2 = 0;
// let res;
// for (const key in ar) {
//   arr1.push(ar[key]);
//   arr2.push(key);
// }
// console.log(arr1, arr2);
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// arr2 = [];
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
// console.log(we, arr2);
// arr2 = ['a', 'b', 'c', 'a', 'a', 'b','a', 'b', 'a', 'a', 'b'];
// let count = {};
// for (const item of arr2) {
//   if (count[item] === undefined) {
//     count[item] = 1;
//   } else {
//     count[item]++;
//   }
// }
// console.log(count);

// let arr = [[3, 5], [5, 4], [5, 6], [5, 6], [5, 6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j]
    
//   }
  
// }
// console.log((sum));

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[j].length; k++) {
//       sum +=arr[i][j][k]
      
//     }
    
//   }
// }
// console.log((sum));

// let arr =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (const iTem of arr) {
//   for (const jElem of iTem) {
//     for (const key of jElem) {
//       sum += key;
//     }
    
//   }
// }
// console.log(sum)
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
// let arr = [12, 19, 28, 13, 14, 345];
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

// function devers(str) {
//   return str.split('').reverse().join('');
// }
// console.log(devers('Mary_Kutsarenko'));
// let arr = [4,5,3,9, 78, 4, 4 ,6];
// function isNegative(arr) {
//   for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i] === arr[i - 1]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(isNegative(arr));

// function isPrime(num) {
// 	for (let i = 2; i < 100; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }
// console.log(isPrime(1,100))

// const names = ['vladimir', 'Mark', 'mary', 'kate'];

// names.forEach(function(item, i, arr){
//   arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// })

// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
  
// }

// const correctName = names.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());

let firstInput = document.querySelector('.first');
let secondInput = document.querySelector('.second');
let sowResultInput = document.querySelector('.show');
let start = document.querySelector('.getSum');
let stop = document.querySelector('.getMult');
let paragrapth = document.querySelector('.text');
let paragrapth2 = document.querySelector('.text2');
let paragrapth3 = document.querySelector('.text3');
let paragrapth4 = document.querySelector('.text4');
let paragrapth5 = document.querySelector('.text5');

let link = document.querySelector('.link');

// firstInput.value = 10;
// let timerId = setInterval(function () {

//   firstInput.value = Number(firstInput.value) - 1;

//   if (firstInput.value == 0) {
//     clearInterval(timerId);
//   }
// }, 1000);

// firstInput.addEventListener('click', function(){
//   setInterval(() => console.log(this.value), 1000)
// });


