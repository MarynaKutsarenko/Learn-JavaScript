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


// for (let i = 0; i < 5; ++i){
//   if (i === 2) {
//     break;
//   }
//   console.log(i);
// }

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

inputOne.addEventListener('blur', tree);
inputTwo.addEventListener('blur', tree);
inputTree.addEventListener('blur', tree);
function tree (){
  this.value = Number(this.value)**2;
}

let a = 20;
const b = 30;
var c;
function mult(e,f){
  var g = 2;
  return e * f * g ;
}
c = mult(2,3);
console.log(c);




// inputOne.getAttribute('value');
// console.log(inputOne.value);
// elem.setAttribute('value', '!!!');
// button.setAttribute('class', 'valid');
// button.removeAttribute('class' , 'valid');
// console.log(button.hasAttribute('value'));

// for (let item of p){
//   item.addEventListener('click', funck);
// }
// function funck() {
//   this.textContent = this.textContent + '!';
//   this.removeEventListener('click', funck);
// }

// for (let item of p){
//   item.addEventListener('click', function qqq(){
//     console.log(this.textContent);
//     this.removeEventListener('click', qqq);
//   })
// }

// elem.addEventListener('click', sum);

// function sum() {
//   for (let i = 1; i < 10 ; i++){
//     this.value = Number(this.value)+ 1;
//   }
//   this.removeEventListener('click', sum);
// }

// link.addEventListener('click', test3);

// function test3() {
//   this.textContent = this.textContent + '(' + link.href + ')';
//   this.removeEventListener('click', test3);
// }

// inputOne.addEventListener('blur', test);
// inputTwo.addEventListener('blur', test);
// inputTree.addEventListener('blur', test);
// inputFore.addEventListener('blur', test);

// function test() {
//   this.value = Number(this.value);
//   this.removeEventListener('blur', test);
// }


// button.addEventListener('click', function(){
//   paragrap1.textContent = Number(inputOne.value) + Number(inputTwo.value) + Number(inputTree.value);
// })


// for (let item of p){
//   item.addEventListener('click', function () {
//     console.log(this.textContent);
//   })
// }

// for (let div of wer){
//   div.addEventListener('click', function(){
//     this.textContent++;
//   })
// }