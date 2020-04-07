'use strict'

let isNumber = function(n){
  return !isNaN(parseFloat(n) && isFinite(n));
}

function promptNumber(massege, errorMassege) {
  let text = '',
      number = 0;
    while (number <= 0){
      text = prompt(massege, '');

      if (isNumber(text)) {
        number = parseInt(text);
      }
      massege = errorMassege;
    }
    return number;
} 

let money ;

let start = function(){
  do {
    money = prompt('Введите Ваш месячный доход!', '12000');
  }
  while (!isNumber(money));
}
start();

let appData = {
    budget: money,
    income: {},       //доп доходы сумма
    addIncome: [],      // перечисляем доп доходы
    expenses: {},       //доп расзоды
    addExpenses: [],    // возможные расходы
    deposit: false,
    mission: 80000,
    period: 6,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function (){
      let sum = 0;
        for (let i = 0; i < 2; i++) {
      
          appData.addExpenses[i] = prompt('Введите обязательную статью расходов!');
          sum += promptNumber('Во сколько обойдется?', 'Ввелите число!');
          appData.expenses =  sum;
        }
        return  {
          appData.addExpenses[0]: appData.expenses ,
          appData.addExpenses[1]: appData.expenses
        };
    },
    getAccumulatedMonth: function () {
      return appData.budget - appData.expenses;
    },
    getTargetMonth: function(){
      return appData.mission / accumulatedMonth;
    },
    getStatusIncome: function () {
      if ( budgetDay >= 1200 ){
        return ('У вас высокий уровень дохода');
      } else if ( budgetDay >= 600 && budgetDay < 1200){
        return ('У вас средний уровень дохода');
      }else if ( budgetDay < 600 && budgetDay >= 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else {
        return ('Произошла ошибка');
      }
    },
    asking: function() {
      let addExpenses = prompt('Перечислите дополнительные расходы: ', 'курсы , проезд');
          appData.addExpenses = addExpenses.toLowerCase().split(' ');
          appData.deposit = confirm('Есть ли у Вас депозит?');
    }
};
appData.asking();
let result1 = appData.getExpensesMonth ();
console.log(result1);

let accumulatedMonth = appData.getAccumulatedMonth();

let target = appData.getTargetMonth();

let budgetDay = accumulatedMonth / 30 ;

console.log('Расходы за месяц: ', appData.expenses);
console.log('Бюджет на день:', Math.floor(budgetDay));

appData.getStatusIncome();

if (target< 0) {
  console.log('Вы не достигните цели');
} else {
  console.log('Период достижения цели: ', Math.ceil(target) + ' месяцев');
}
