document.addEventListener('DOMContentLoaded', function(){
'use strict';

  let buttonCalculate = document.getElementById('start'),
      buttonAddExpPlus = document.getElementsByTagName('button')[0],
      buttonIncomeExpPlus = document.getElementsByTagName('button')[1],
      checkDeposit = document.getElementById('deposit-check'),
      inputAddIncome = document.querySelectorAll('.additional_income-item'),
      inputBudgetMonth = document.querySelector('.budget_month-value'),
      inputBudgetDay = document.querySelector('.budget_day-value'),
      inputExpensesMonth = document.querySelector('.expenses_month-value'),
      inputAdditionalIncome = document.querySelector('.additional_income-value'),
      inputAdditionalExpenses = document.querySelector('.additional_expenses-value'),
      inputIncomePeriod = document.getElementsByClassName('income_period-value'),
      inputTargetMonth = document.getElementsByClassName('target_month-value'),
      inputRange = document.querySelector('.period-select'),
      inputTargetAmount = document.querySelector('.target-amount'),
      inputDepositPercent = document.querySelector('.deposit-percent'),
      inputDepositAmount = document.querySelector('.deposit-amount'),
      selectDepositBank = document.querySelector('.deposit-bank'),
      inputEdditionalExpenses = document.querySelector('.additional_expenses-item'),
      buttonExpensesAdd = document.querySelector('.expenses_add'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      inputExpensesTitle = document.querySelector('.expenses-title'),
      inputIncomeAmount = document.querySelector('.income-amount'),
      inputIncomeTitle = document.querySelector('.income-title'),
      inputSalaryAmount = document.querySelector('.salary-amount');

  let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
  };

  let checkString = function(line){
    return isNaN(parseFloat(line)) && line !== '';
  };

  let appData = {
      budget: 0,
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
      start: function(){
        if (inputSalaryAmount.value === '') {
          alert('Ошибка! поле "Ваш месячный доход " должно быть заполнено ');
          return; 
        }
        appData.budget = inputSalaryAmount.value;
      

      
      appData.getExpenses();
      appData.getExpensesMonth();
      appData.getBudget ();
      appData.getTargetMonth();
      appData.getStatusIncome();
      appData.showResult();
      appData.getAddExpenses();
      appData.getAddIncome();

      },
      showResult: function(){
        inputBudgetMonth.value = appData.budgetMonth;
        inputBudgetDay.value = appData.budgetDay;
        inputExpensesMonth.value = appData.expensesMonth;
        inputAdditionalExpenses.value = appData.addExpenses.join(',');
        inputAdditionalIncome.value = appData.addIncome;
      },
      addExpensesBlock: function(){

        let cloneExpensesItem = expensesItems[0].cloneNode(true);
          expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonIncomeExpPlus);
          expensesItems = document.querySelectorAll('.expenses-items');

            if (expensesItems.length === 3) {
              buttonIncomeExpPlus.hidden = true;
            }
      },
      getExpenses: function(){
        expensesItems.forEach(function(item){
          let itemExpenses = item.querySelector('.expenses-title').value;
          let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses);
              appData.expenses[itemExpenses] = cashExpenses;
        });
      },
      getAddExpenses: function(){
        let addExpenses = inputAdditionalExpenses.value.split(',');
            addExpenses.forEach(function(item){
              item = item.trim();
              if (item !== '') {
                appData.addExpenses.push(item);
              }
            });
      },
      getAddIncome: function(){
        inputAddIncome.forEach(function(item){
          let itemValue = item.value.trim();
            if (itemValue !== '') {
              appData.addIncome.push(itemValue);
              console.log(appData.addIncome);
            }
        });
      },
      asking: function() {

        if (confirm('Есть ли у Вас дополнительный источник заробатка?')){
          let itemIncome = prompt('Какой у Вас дополнительный зароботок? ');
                while (!checkString(itemIncome)){
                  itemIncome = prompt('ошибка! Введите дополнительный источник заробатка!');
                }

          let cashIncome = prompt('Сколько денег вы на этом зарабатываете? ');
                while (!isNumber(cashIncome)){
                  cashIncome = prompt('ошибка! Сколько денег вы на этом зарабатываете?');
                }
          appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите дополнительные расходы: ');
              while (!checkString(addExpenses)){
                addExpenses = prompt('ошибка! Введите дополнительные расходы!');
              }

            appData.addExpenses = addExpenses.split(' ').map(word => word[0].toUpperCase(addExpenses) + word.substring(1)).join(' ');
            appData.deposit = confirm('Есть ли у Вас депозит?');

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
          appData.percentDeposit = prompt('Какой у Вас годовой процент?');
            while(!isNumber(appData.percentDeposit)){
              appData.percentDeposit = prompt('Ошибка! Какой у Вас годовой процент?');
            }
          appData.moneyDeposit = prompt('Какая сумма заложена?');
            while(!isNumber(appData.moneyDeposit)){
              appData.moneyDeposit = prompt('Ошибка! Какой у Вас годовой процент?');
            }
        }
      },
      calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
      },
  };

  buttonCalculate.addEventListener('click', appData.start);
  buttonIncomeExpPlus.addEventListener('click', appData.addExpensesBlock);





  
  // if (appData.getTargetMonth < 0) {
  //   console.log('Вы не достигните цели');
  // } else {
  //   console.log('Период достижения цели: ', Math.ceil(appData.period) + ' месяцев');
  // }



});
