'use strict'

let money = +prompt('Введите Ваш месячный доход!', '10000'),
    income = 'фриланс',
    addExpenses = prompt('Перечислите дополнительные расходы: ', 'тренажерка Интернет кваРтплата'),
    deposit = confirm('Есть ли у Вас депозит?'),
    mission = 80000,
    period = 7,
    budgetMonth ,
    target ,
    budgetDay ;


function getQuestions() {
  let expenses = prompt('Введите обязательную статью расходов! :', 'квартплата продукты проезд'),
      amount = +prompt('Во сколько обойдется?', '3000')
    return{
      expenses: expenses,
      amount: amount
    };
}

let answer1 = getQuestions(),
    answer2 = getQuestions();

let amount1 = answer1.amount + answer2.amount
// вычисление месячного бюджета
budgetMonth  = money - amount1;

target = Math.ceil(mission / budgetMonth);

budgetDay = Math.floor(budgetMonth / 30);

console.log(target);

console.log(typeof(money));
console.log(typeof(income));
console.log(deposit);
console.log('Бюджет на месяц:', budgetMonth);
console.log(addExpenses.length);
console.log('Период равен ', period , ' месяцев, ' , ' Цель заработать ', mission, 'рублей/долларов/гривен/юани ');
console.log(addExpenses.toLowerCase().split(' '));
console.log('Бюджет на день:', budgetDay);

if ( budgetDay >= 1200 ){
  console.log('У вас высокий уровень дохода');
} else if ( budgetDay >= 600 && budgetDay < 1200){
  console.log('У вас средний уровень дохода');
}else if ( budgetDay < 600 && budgetDay > 0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}