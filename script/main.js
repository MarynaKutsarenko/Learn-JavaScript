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

// getExpensesMonth: function (){
//   let sum = 0;
//     for (let i = 0; i < 2; i++) {
  
//       appData.addExpenses[i] = prompt('Введите обязательную статью расходов!', 'тренажерка , квартплатаб тнет ');
//       do {
//         sum += +prompt('Во сколько обойдется?', '234');
//       }
//       while(!isNumber(sum));
//       appData.expenses =  sum;
//     }
//   return appData.expenses ;
// }
// let isNumber = function(n){
//   return !isNaN(parseFloat(n) && isFinite(n));
// }

// function promptNumber(massege, errorMassege) {
//   let text = '',
//       number = 0;
//     while (number <= 0){
//       text = prompt(massege, '');

//       if (isNumber(text)) {
//         number = parseInt(text);
//       }
//       massege = errorMassege;
//     }
//     return number;
// }
// let checkString = function(line){
//   return isNaN(parseFloat(line)) && line !== '';
// };
// let addExpenses = prompt('Введите обязательную статью расходов!');
// do {
//   addExpenses = prompt('ошибка! Введите обязательную статью расходов!');
// } while (!checkString(addExpenses));



// function promptString(massege, errorMassege) {
//   let text= prompt( massege, '');
//     while ( text === ' '  || text === null || (text.trim() == '')){
//       text = prompt( errorMassege, '')  ;
//       }
//     addExpenses = text;
// } 


// let addExpenses;
// let isText = function(n){
//    do {
//      addExpenses = prompt('Введите обязательную статью расходов!', 'ошибка! ');
//    }
//    while()
//  }
//  isText();



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




// let expenses = [];
// function getQuestions() {
//     addExpenses = prompt('Введите обязательную статью расходов!', 'тренажерка , квартплатаб инет ');
//     expenses = promptNumber('Во сколько обойдется?', 'Ввелите число!');
//     return{
//       addExpenses: addExpenses,
//       expenses: expenses
//     };
// }

// let result1 = getQuestions();
// let result2 = getQuestions();
// console.log(addExpenses);
// console.log(expenses);



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



