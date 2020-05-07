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



let link = document.querySelector('.link ');
let input = document.querySelector('input');
let elem = document.querySelector('#elem');
let image = document.querySelector('img');
let inputOne = document.querySelector('#input');
let inputTwo = document.querySelector('#input2');
let inputTree = document.querySelector('#input3');
let inputFore = document.querySelector('#input4');
let inputFiwe = document.querySelector('#input4');
let div = document.querySelector('#qw');
let button = document.querySelector('#button');
let elem2 = document.querySelector('#elem2');
let p = document.querySelectorAll('.wwww');
let parrent = document.querySelectorAll('#parrent');

let paragrap1 = document.querySelector('#element1');
let paragrap2 = document.querySelector('#element2');
let paragrap3 = document.querySelector('#element3');
let paragrap5 = document.querySelector('#element5');
let wer = document.querySelectorAll('div');
let value = newInput.getAttribute('value');

image.width = 300;

inputOne.addEventListener('focus', test);
inputOne.addEventListener('blur', test2);
function test() {
  this.textContent = 1;
}
function test2() {
  this.textContent = 2 ;
}

elem.addEventListener('click', function () {
  this.value = +this.value + 1;
})
button.addEventListener('click', funck);
elem.addEventListener('click', funck);
elem2.addEventListener('click', funck);

function funck() {
  console.log(this.value);
}

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

class CarWash {

   constructor(brand, model = CarWash.noCarBaseModel(), services = []){
     this.brand = brand;
     this.model = model;
     this.washed = false;
     this._services = services;
   }

   static noCarBaseModel(){
     return 'none';
   }

   washReady(){
    this.washed = true;
    CarWash.counter++;
    this.report();
   }

   report(){
    console.log(this.brand, this.model, this.washed);
   }

   get services(){
     console.log(this._services);
     return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
   }

   set services(addServices){
     return this._services.push(addServices);
   }
}

class PassCar extends CarWash{
  constructor(brand, model, services, pass = 5){
    super(brand, model, services)
      this.pass = pass;
  }

  washReady(){
    super.washReady();
    this.repotrOffice();
   }

  repotrOffice(){
    console.log('На мойке для легковых , помыта машина');
  }
}

CarWash.counter = 0;

 const car1 = new CarWash('mazda', 3, ['black tieres' , 'wax']);
 const car2 = new CarWash('BMW', 'x6'); 
 const car3 = new PassCar('Audi', 3);
 const car4 = new CarWash('ZAZ');


 car4.services = 'протирка стекол';

car3.washReady();
car1.washReady();

 console.log(car1);
 console.log(car3);