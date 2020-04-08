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
    budget: +money,
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
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = appData.budgetMonth / 30 ;
    },
    getExpensesMonth: function(){
      for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
      }
    },
    getTargetMonth: function(){
      appData.period = appData.mission / appData.budgetMonth;
    },
    getStatusIncome: function () {
      if ( appData.budgetDay >= 1200 ){
        return ('У вас высокий уровень дохода');
      } else if ( appData.budgetDay >= 600 && appData.budgetDay  < 1200){
        return ('У вас средний уровень дохода');
      }else if ( appData.budgetDay < 600 && appData.budgetDay >= 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else {
        return ('Произошла ошибка');
      }
    },
    outlog: function(){
      for (const key in appData) {
        console.log('Ключ: ' + key + ' значение: ' + appData[key]);
      }
    },
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget ();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Ваш уровень дохода: ', appData.getStatusIncome());

if (appData.getTargetMonth < 0) {
  console.log('Вы не достигните цели');
} else {
  console.log('Период достижения цели: ', Math.ceil(appData.period) + ' месяцев');
}
