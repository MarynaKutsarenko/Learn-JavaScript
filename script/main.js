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
    asking: function() {
      let addExpenses = prompt('Перечислите дополнительные расходы: ', 'курсы , проезд');
          appData.addExpenses = addExpenses.toLowerCase().split(' ');
          appData.deposit = confirm('Есть ли у Вас депозит?');

          for (let i = 0; i < 2; i++) {
      
            let amound = prompt('Введите обязательную статью расходов!');
            let cost = promptNumber('Во сколько обойдется?', 'Ввелите число!');

            appData.expenses[amound]= cost;
          }
    },
    getBudget: function (){
      for (let key in appData.expenses) {
        return appData.getBudget += +appData.expenses;
      }
    },
    getAccumulatedMonth: function () {
      return appData.budget - appData.expenses;
    },
    getTargetMonth: function(){
      return appData.mission / appData.getAccumulatedMonth;
    },
    getStatusIncome: function () {
      if ( appData.getBudget >= 1200 ){
        return ('У вас высокий уровень дохода');
      } else if ( appData.getBudget >= 600 && appData.getBudget  < 1200){
        return ('У вас средний уровень дохода');
      }else if ( appData.getBudget < 600 && appData.getBudget >= 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else {
        return ('Произошла ошибка');
      }
    },
};
appData.asking();
appData.getBudget ();
appData.getAccumulatedMonth();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы за месяц: ', appData.expenses);
console.log('Ваш уровень дохода: ', appData.getStatusIncome);

if (appData.getTargetMonth < 0) {
  console.log('Вы не достигните цели');
} else {
  console.log('Период достижения цели: ', Math.ceil(appData.getTargetMonth) + ' месяцев');
}
