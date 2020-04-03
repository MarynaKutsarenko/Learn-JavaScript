'use strict'
let isNumber = function(n){
  return !isNaN(parseFloat(n) && isFinite(n));
}

let money ,
    income = 'фриланс',
    addExpenses = prompt('Перечислите дополнительные расходы: ', 'тренажерка Интернет кваРтплата'),
    deposit = confirm('Есть ли у Вас депозит?'),
    mission = 80000,
    period = 7,
    target ,
    budgetDay ,
    amount ,
    expenses = [];

let start = function(){
  do {
    money = prompt('Введите Ваш месячный доход!', '12000');
  }
  while (!isNumber(money));
}
start();
let sum = 0;
let getExpensesMonth = function (){

  for (let i = 0; i < 2; i++) {

     expenses[i] = prompt('Введите обязательную статью расходов!');
     do {
      sum = +prompt('Во сколько обойдется?');
     }
    while(!isNumber(sum));
    amount = sum;
  }
  return  amount + sum;
}
getExpensesMonth ();
// вычисление месячного бюджета
let accumulatedMonth = getAccumulatedMonth(money, amount)

function getAccumulatedMonth(budget, expenses) {
  return  budget - expenses;
}
getAccumulatedMonth();
//цель накопить
target = getTargetMonth(mission ,accumulatedMonth);

function getTargetMonth(wants, saved) {
  return wants / saved;
}
getTargetMonth();

budgetDay = accumulatedMonth / 30 ;

let showTypeOf = function (data) {
  console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц: ', amount);
console.log('Возможные расходы на: ', addExpenses.toLowerCase().split(' '));
console.log('Бюджет на день:', Math.floor(budgetDay));


function getStatusIncome() {
    if ( budgetDay >= 1200 ){
    return ('У вас высокий уровень дохода');
  } else if ( budgetDay >= 600 && budgetDay < 1200){
    return ('У вас средний уровень дохода');
  }else if ( budgetDay < 600 && budgetDay >= 0){
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Произошла ошибка');
  }
}
getStatusIncome();
if (target< 0) {
  console.log('Вы не достигните цели');
} else {
  console.log('Период достижения цели: ', Math.ceil(target) + ' месяцев');
}