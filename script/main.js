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

let arr =  [10, 20, 30, 50, 235, 3000, 70];
arr = arr.toString().split(',');
console.log(arr);
let arra =  ['пн', 'вт','ср', 'чт', 'пт', 'сб', 'вс'];
let day = 'вт';
for (let i = 0; i < arra.length; i++) {
  if (arra[i] == 'сб' || arra[i] == 'вс') {
    document.write(`<p><b>${arra[i]}</b></p>`);
} else if (arra[i] == day) {
  document.write(`<p><b>${arra[i]}</b></p>`);
} else{
    document.write(`<p>${arra[i]}</p>`);
  }
}
  
  console.log(arra.reverse());

let v = [ 'a', 'b', 'c', 'd', 'e'];
for (let i = 0; i <= v.length -1; i++){
  console.log(v[i]);
}
let q = [10, 20, 30, 50, 235, 3000];
q= q.toString().split(',');
let res = 0;
for (let i = 0; i < q.length; i++) {
  if (q[i].startsWith('1') || q[i].startsWith('3') || q[i].startsWith('5')) {
    console.log(q[i]);
  }
}
console.log(q.reverse());
let w = [1, 2, 3, 4, 5];
let r = 0;
for (const item of w) {
r = r + item;
  console.log(r)
}

let obj = {a: 1, b: 12, c: 3, d: 4, e: 13};
let sm =0;
for (const key in obj) {
  sm += obj[key];
}
console.log(sm);

for (let i = 0, j = 0; i < arra.length; i++, j += 2) {
  console.log(i,j);
  
}
let mmm = 31;
let result;
let flag = true;
for (let i = 0; i < mmm; i++) {
  if (mmm % i == 0) {
    flag = false;
    break;
  }
  
}
console.log(flag);
let jer = 500;
for (let i = 0; i < jer; i++) {
  if (jer > 10) {
    jer = jer / 2;
  };
  console.log(jer, i);
}
let df = '';
for (let i = 1; i < 10; i++) {
 
  df += i;
}
console.log(df.toString().split(''));
let qa = [1,2,3,4,5];
for (let i = 0; i < qa.length; i++) {
  qa[i]+=10;
  
}
console.log(qa)