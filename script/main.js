'use strict'

let money = +prompt('Введите Ваш месячный доход!', '10000'),
    income = 'фриланс',
    addExpenses = prompt('Перечислите дополнительные расходы: ', 'тренажерка Интернет кваРтплата'),
    deposit = confirm('Есть ли у Вас депозит?'),
    mission = 80000,
    period = 7,
    target ,
    budgetDay ;

function getQuestions() {
  let expenses = prompt('Введите обязательную статью расходов! :', 'квартплата продукты проезд'),
      amount = +prompt('Во сколько обойдется?', '3000')
    return{
      expenses: expenses,
      amount: amount
    };
};

let answer1 = getQuestions(),
    answer2 = getQuestions();
//обязательные расходы
let amount1 = getExpensesMonth(answer1.amount, answer2.amount);

function getExpensesMonth(expenses1,expenses2) {
    return expenses1 + expenses2;
}
getExpensesMonth();
// вычисление месячного бюджета
let accumulatedMonth = getAccumulatedMonth(money, amount1)

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
//target = Math.ceil(mission / budgetMonth);
budgetDay = accumulatedMonth / 30 ;

let showTypeOf = function (data) {
  console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц: ', amount1);
console.log('Возможные расходы на: ', addExpenses.toLowerCase().split(' '));
console.log('Период достижения цели: ', Math.ceil(target) + ' месяцев');
console.log('Бюджет на день:', Math.floor(budgetDay));


function getStatusIncome() {
    if ( budgetDay >= 1200 ){
    return ('У вас высокий уровень дохода');
  } else if ( budgetDay >= 600 && budgetDay < 1200){
    return ('У вас средний уровень дохода');
  }else if ( budgetDay < 600 && budgetDay > 0){
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так');
  }
}
getStatusIncome();
console.log(getStatusIncome());