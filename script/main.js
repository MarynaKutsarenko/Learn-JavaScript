'use strict'

function one(callback) {
  console.log('сделать запрос');
  setTimeout(function(){
    console.log('получить данные');
  }, 1000);
  setTimeout(function(){
    callback();
  }, 2000);
}


one(two);


function two() {
  console.log('отобразить');
}

//детерминированная функция зависит от данных

function res(w, e) {
  const sum = w * e;
  return sum;
}

console.log(res(3, 4));
console.log(res(6, 4));
console.log(res(7, 8));
console.log(res(8, 4));