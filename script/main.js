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
let checkString = function(line){
  return isNaN(parseFloat(line)) && line !== '';
};

let money = promptNumber('Введите Ваш месячный доход!', 'Ошибка! Введите число!'); 

let appData = {
    budget: +money,
    income: {},       //доп доходы сумма
    addIncome: [],      // перечисляем доп доходы
    expenses: {},       //доп расзоды
    addExpenses: [],    // возможные расходы
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 80000,
    period: 6,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {

      if (confirm('Есть ли у Вас дополнительный источник заробатка?')){
        let itemIncome = prompt('Какой у Вас дополнительный зароботок? ');
              while (!checkString(itemIncome)){
                itemIncome = prompt('ошибка! Введите дополнительный источник заробатка!');
              }

        let cashIncome = promptNumber('Сколько денег вы на этом зарабатываете? ', 'Ошибка! Введите число!');
        appData.income[itemIncome] = cashIncome;
      }

      let addExpenses = prompt('Перечислите дополнительные расходы: ');
            while (!checkString(addExpenses)){
              addExpenses = prompt('ошибка! Введите дополнительные расходы!');
            }

          appData.addExpenses = addExpenses.split(' ').map(word => word[0].toUpperCase(addExpenses) + word.substring(1)).join(' ');
          appData.deposit = confirm('Есть ли у Вас депозит?');

          for (let i = 0; i < 2; i++) {
      
            let amound = prompt('Введите обязательную статью расходов!');
                  while (!checkString(addExpenses)){
                    addExpenses = prompt('ошибка! Введите статью расходов!');
                  }

            let cost = promptNumber('Во сколько обойдется?', 'Ошибка! Введите число!');
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
    getInfoDeposit: function(){
      if (appData.deposit){
        appData.percentDeposit = promptNumber('Какой у Вас годовой процент?');
        appData.moneyDeposit = promptNumber('Какая сумма заложена?');
      }
    },
    calcSavedMoney: function(){
      return appData.budgetMonth * appData.period;
    },
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget ();
appData.getTargetMonth();
appData.getStatusIncome();
appData.outlog();
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Ваш уровень дохода: ', appData.getStatusIncome());
console.log('Ваши возможные расходы: ', appData.addExpenses);

if (appData.getTargetMonth < 0) {
  console.log('Вы не достигните цели');
} else {
  console.log('Период достижения цели: ', Math.ceil(appData.period) + ' месяцев');
}
