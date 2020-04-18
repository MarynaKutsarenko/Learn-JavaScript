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
        AdditionalExpensesValue = document.querySelector('.additional_expenses-value'),
        inputIncomePeriod = document.querySelector('.income_period-value'),
        inputTargetMonth = document.querySelector('.target_month-value'),
        inputRange = document.querySelector('.period-select'),
        inputTargetAmount = document.querySelector('.target-amount'),
        inputDepositPercent = document.querySelector('.deposit-percent'),
        inputDepositAmount = document.querySelector('.deposit-amount'),
        selectDepositBank = document.querySelector('.deposit-bank'),
        inputAdditionalExpenses = document.querySelector('.additional_expenses-item'),
        buttonExpensesAdd = document.querySelector('.expenses_add'),
        expensesItems = document.querySelectorAll('.expenses-items'),
        inputExpensesTitle = document.querySelector('.expenses-title'),
        inputIncomeTitle = document.querySelector('.income-title'),
        inputSalaryAmount = document.querySelector('.salary-amount'),
        incomeItems = document.querySelectorAll('.income-items'),
        periodAmount = document.querySelector('.period-amount') ,
        resetButton = document.querySelector('#cancel'),
        inputsData = document.querySelector('.data').querySelectorAll('input[type=text]'),
        inputsAllClear = document.querySelector('.data').querySelectorAll('input[type=text]'),
        inputsAllClearBoth = document.querySelector('.result').querySelectorAll('input[type=text]');
  
    let isNumber = function(n){
      return !isNaN(parseFloat(n) && isFinite(n));
    };
  
    let checkString = function(line){
      return isNaN(parseFloat(line)) && line !== '';
    };
  
    let appData = {
        budget: 0,
        income: {},       //доп доходы сумма
        addIncome: [],  // перечисляем доп доходы
        incomeMonth: 0,    
        expenses: {},       //доп расходы
        addExpenses: [],    // возможные расходы
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,

        start: function(){

        this.budget = +inputSalaryAmount.value;
        
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget ();
        this.blockInputs();

        this.showResult();
        buttonCalculate.style.display = 'none';
        cancel.style.display = 'block';
        },
        showResult: function(){
  
          inputBudgetMonth.value = this.budgetMonth;
          inputBudgetDay.value = Math.floor(this.budgetDay);
          inputExpensesMonth.value = this.expensesMonth;
          AdditionalExpensesValue.value = this.addExpenses.join(',');
          inputAdditionalIncome.value = this.addIncome.join(', ');
          inputTargetMonth.value = Math.ceil(this.getTargetMonth());
          inputIncomePeriod.value = this.calcSavedMoney();
  
          inputRange.addEventListener('input', function(){
            inputIncomePeriod.value = appData.calcSavedMoney();
          });
  
          
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
            this.incomeMonth += +(this.income[key]);
          }
        },
        getAddExpenses: function(){
          let addExpenses = inputAdditionalExpenses.value.split(', ');
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
          this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
          this.budgetDay = + this.budgetMonth / 30 ;
        },
        getExpensesMonth: function(){
          for (let key in appData.expenses) {
            this.expensesMonth += +this.expenses[key];
          }
        },
        getTargetMonth: function(){
          return inputTargetAmount.value / this.budgetMonth;
        },
        getStatusIncome: function () {
          if ( this.budgetDay >= 1200 ){
            return ('У вас высокий уровень дохода');
          } else if ( this.budgetDay >= 600 && this.budgetDay  < 1200){
            return ('У вас средний уровень дохода');
          }else if ( this.budgetDay < 600 && this.budgetDay >= 0){
            return ('К сожалению у вас уровень дохода ниже среднего');
          } else {
            return ('Произошла ошибка');
          }
        },
        getInfoDeposit: function(){
          if (this.deposit){
           this.percentDeposit = prompt('Какой у Вас годовой процент?');
              while(!isNumber(this.percentDeposit)){
                this.percentDeposit = prompt('Ошибка! Какой у Вас годовой процент?');
              }
            this.moneyDeposit = prompt('Какая сумма заложена?');
              while(!isNumber(this.moneyDeposit)){
                this.moneyDeposit = prompt('Ошибка! Какой у Вас годовой процент?');
              }
          }
        },
        calcSavedMoney: function(){
          return this.budgetMonth * Number(inputRange.value);
        },
        changeRangeValue: function(){
          periodAmount.textContent = inputRange.value ;
        },
        checkButtonCalculate: function(){
          if (inputSalaryAmount.value === '' || !isNumber(inputSalaryAmount.value)) {
            buttonCalculate.setAttribute('disabled', 'disabled');
          } else {
            buttonCalculate.removeAttribute('disabled');
          }
        },
        blockInputs: function(){
          for (let item of inputsData){
            if (resetButton) {
              item.setAttribute('disabled', 'disabled');
            } else {
              item.removeAttribute('disabled');
            }
          }
        },
        blockReset: function(){
          appData.blockInputs();
          buttonCalculate.style.display = 'block';
          cancel.style.display = 'none';
          inputRange.value = 0;

          for (let i = 1; i < incomeItems.length; i++) {
            incomeItems[i].remove();
            incomeItems = document.querySelectorAll('.income-items');
            buttonIncomeExpPlus.style.display = 'block';
          }
          for (let i = 1; i < expensesItems.length; i++) {
            expensesItems = document.querySelectorAll('.expenses-items');
            expensesItems[i].remove();
            buttonAddExpPlus.style.display = 'block';
          }

          this.budget = 0;
          this.income = {};       
          this.addIncome = [];  
          this.incomeMonth = 0;    
          this.expenses = {};       
          this.addExpenses = [];    
          this.deposit = false;
          this.percentDeposit = 0;
          this.moneyDeposit = 0;
          this.budgetDay = 0;
          this.budgetMonth = 0;
          this.expensesMonth = 0;

          inputsAllClear.forEach(function(item){
            item.value = '';
          })
          
          inputsAllClearBoth.forEach(function(item){
            item.value = '';
          })

        },
  
    };
    
    resetButton.style.disply = 'block';
    inputSalaryAmount.addEventListener('change', appData.checkButtonCalculate);
    buttonCalculate.addEventListener('click', appData.start.bind(appData));
    resetButton.addEventListener('click', appData.blockReset);
    buttonIncomeExpPlus.addEventListener('click', appData.addExpensesBlock);
    buttonAddExpPlus.addEventListener('click', appData.addIncomeBlock);
    inputRange.addEventListener('input', appData.changeRangeValue);
  
  
  
  
  });
