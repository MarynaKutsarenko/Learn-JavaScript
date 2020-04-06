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

// let arr = [ 'Mary',  'Kutsarenko'];
// arr.push('Vladimirowna');
// console.log(arr);
// console.log(arr.splice(2,1, 'girl', 'good'));
// console.log(arr);
// console.log(arr.push('student'),arr, arr.join( ));
// console.log(arr.sort());
// console.log(arr.slice(-1));
// console.log(arr.push('kutsarenko'));
// console.log(arr);



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