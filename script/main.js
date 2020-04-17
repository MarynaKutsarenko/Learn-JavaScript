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
      inputIncomePeriod = document.querySelector('.income_period-value')[0],
      inputTargetMonth = document.querySelector('.target_month-value')[0],
      inputRange = document.querySelector('.period-select'),
      inputTargetAmount = document.querySelector('.target-amount'),
      inputDepositPercent = document.querySelector('.deposit-percent'),
      inputDepositAmount = document.querySelector('.deposit-amount'),
      selectDepositBank = document.querySelector('.deposit-bank'),
      inputEdditionalExpenses = document.querySelector('.additional_expenses-item'),
      buttonExpensesAdd = document.querySelector('.expenses_add'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      inputExpensesTitle = document.querySelector('.expenses-title'),
      inputIncomeTitle = document.querySelector('.income-title'),
      inputSalaryAmount = document.querySelector('.salary-amount'),
      incomeItems = document.querySelectorAll('.income-items'),
      periodAmoun = document.querySelector('.period-amount') ;

  let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
  };

  let checkString = function(line){
    return isNaN(parseFloat(line)) && line !== '';
  };

  let appData = {
      budget: 0,
      income: {},       //доп доходы сумма
      addIncome: [], 
      incomeMonth: 0,     // перечисляем доп доходы
      expenses: {},       //доп расходы
      addExpenses: [],    // возможные расходы
      deposit: false,
      percentDeposit: 0,
      moneyDeposit: 0,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      start: function(){

        if (inputSalaryAmount.value === '') {
          alert('Ошибка! поле "Ваш месячный доход " должно быть заполнено ');
          return; 
        }
        appData.budget = +inputSalaryAmount.value;
      

      
      appData.getExpenses();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget ();
      
      appData.showResult();
      },
      showResult: function(){

        inputBudgetMonth.value = appData.budgetMonth;
        inputBudgetDay.value = Math.floor(appData.budgetDay);
        inputExpensesMonth.value = appData.expensesMonth;
        inputAdditionalExpenses.value = appData.addExpences.join(',');
        inputAdditionalIncome.value = appData.addIncome.join(',');
        inputTargetMonth.value = Math.ceil(appData.getTargetMonth());
        inputIncomePeriod.value = appData.calcSavedMoney();

        inputRange.addEventListener('input', function(){
          inputIncomePeriod.value = appData.calcSavedMoney();
        });

        periodAmoun.textContent = inputRange.value;
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
      addIncomeBlock: function(){

        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, buttonAddExpPlus);
        incomeItems = document.querySelectorAll('.income-items');

          if (incomeItems.length === 3) {
            buttonAddExpPlus.hidden = true;
          }
      },
      getIncome: function(){

        incomeItems.forEach(function(item){
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome) {
              appData.income[itemIncome] = cashIncome;
            }
        });

        for (let key in appData.income){
          appData.incomeMonth += +(appData.income[key]);
        }
      },
      getAddExpenses: function(){
        let addExpenses = inputEdditionalExpenses.value.split(',');
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
            }
        });
      },
      getBudget: function (){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = + appData.budgetMonth / 30 ;
      },
      getExpensesMonth: function(){
        for (let key in appData.expenses) {
          appData.expensesMonth += +appData.expenses[key];
        }
      },
      getTargetMonth: function(){
        return inputTargetAmount.value / appData.budgetMonth;
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
        return appData.budgetMonth * Number(inputIncomePeriod.value);
      },
  };

  buttonCalculate.addEventListener('click', appData.start);
  buttonIncomeExpPlus.addEventListener('click', appData.addExpensesBlock);
  buttonAddExpPlus.addEventListener('click', appData.addIncomeBlock);




});
