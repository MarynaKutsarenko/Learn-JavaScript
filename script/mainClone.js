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
    const AppData = function () {

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

    };

    AppData.prototype.start = function(){
  
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

    };

    AppData.prototype.showResult = function(){
      const __this = this;
      
      inputBudgetMonth.value = this.budgetMonth;
      inputBudgetDay.value = Math.floor(this.budgetDay);
      inputExpensesMonth.value = this.expensesMonth;
      AdditionalExpensesValue.value = this.addExpenses.join(',');
      inputAdditionalIncome.value = this.addIncome.join(', ');
      inputTargetMonth.value = Math.ceil(this.getTargetMonth());
      inputIncomePeriod.value = this.calcSavedMoney();

      inputRange.addEventListener('input', function(){
        inputIncomePeriod.value = __this.calcSavedMoney();
      });
      
    };

    AppData.prototype.addExpensesBlock = function(){
    
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonIncomeExpPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

          if (expensesItems.length === 3) {
            buttonIncomeExpPlus.hidden = true;
          }
    };

    AppData.prototype.getExpenses = function(){
    const __this = this;

      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
          if (itemExpenses !== '' && cashExpenses);
            __this.expenses[itemExpenses] = cashExpenses;
      });

    };

    AppData.prototype.addIncomeBlock = function(){
    
      let cloneIncomeItems = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItems, buttonAddExpPlus);
      incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
          buttonAddExpPlus.hidden = true;
        }
    };

    AppData.prototype.getIncome = function(){
      const __this = this;
    
      incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome) {
            __this.income[itemIncome] = cashIncome;
          }
      });

      for (let key in __this.income){
        this.incomeMonth += +(this.income[key]);
      }
    };

    AppData.prototype.getAddExpenses = function(){
    const __this = this;

      let addExpenses = inputAdditionalExpenses.value.split(', ');
          addExpenses.forEach(function(item){
           item = item.trim();
            if (item !== '') {
              __this.addExpenses.push(item);
            }
          });
    };

    AppData.prototype.getAddIncome = function(){
    const __this = this;

      inputAddIncome.forEach(function(item){
        let itemValue = item.value.trim();
          if (itemValue !== '') {
            __this.addIncome.push(itemValue);
          }
      });
    };

    AppData.prototype.getBudget = function (){
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay = + this.budgetMonth / 30 ;
    };

    AppData.prototype.getExpensesMonth = function(){
    const __this = this;

      for (let key in __this.expenses) {
        this.expensesMonth += +this.expenses[key];
      }
    };

    AppData.prototype.getTargetMonth = function(){
      return inputTargetAmount.value / this.budgetMonth;
    };

    AppData.prototype.getStatusIncome = function () {
      if ( this.budgetDay >= 1200 ){
        return ('У вас высокий уровень дохода');
      } else if ( this.budgetDay >= 600 && this.budgetDay  < 1200){
        return ('У вас средний уровень дохода');
      }else if ( this.budgetDay < 600 && this.budgetDay >= 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else {
        return ('Произошла ошибка');
      }
    };

    AppData.prototype.getInfoDeposit = function(){
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
    };

    AppData.prototype.calcSavedMoney = function(){
      return this.budgetMonth * Number(inputRange.value);
    };

    AppData.prototype.changeRangeValue = function(){
      periodAmount.textContent = inputRange.value ;
    };

    AppData.prototype.checkButtonCalculate = function(){
      if (inputSalaryAmount.value === '' || !isNumber(inputSalaryAmount.value)) {
        buttonCalculate.setAttribute('disabled', 'true');
      } else {
        buttonCalculate.removeAttribute('disabled');
      }
    };

    AppData.prototype.blockInputs = function(){
      inputsData = document.querySelector('.data').querySelectorAll('input[type=text]');
      for (let item of inputsData){
        if (resetButton) {
          item.setAttribute('disabled', 'true');
        } else  {
          item.removeAttribute('disabled');
        }
      }
    };

    AppData.prototype.blockReset = function(){
    const __this = this;
  
      __this.blockInputs();
      buttonCalculate.style.display = 'block';
      cancel.style.display = 'none';
      inputRange.value = 0;
      periodAmount.value = 0;

      inputsData = document.querySelector('.data').querySelectorAll('input[type=text]');
      for (let item of inputsData){
          item.removeAttribute('disabled');
        }

      for (let  i = incomeItems.length - 1; i > 0; i--) {
        incomeItems = document.querySelectorAll('.income-items');
        incomeItems[i].remove();
        buttonIncomeExpPlus.style.display = 'block';
      }
      for (let  i = expensesItems.length - 1; i > 0; i--) {
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
      });
      
      inputsAllClearBoth.forEach(function(item){
        item.value = '';
      });

    };

    AppData.prototype.eventListeners = function(){

      resetButton.style.disply = 'block';
      inputSalaryAmount.addEventListener('change', appData.checkButtonCalculate);
      buttonCalculate.addEventListener('click', appData.start.bind(appData));
      resetButton.addEventListener('click', appData.blockReset.bind(appData));
      buttonIncomeExpPlus.addEventListener('click', appData.addExpensesBlock);
      buttonAddExpPlus.addEventListener('click', appData.addIncomeBlock);
      inputRange.addEventListener('input', appData.changeRangeValue);
    };
    const appData = new AppData ();
    AppData.prototype.eventListeners();
    console.log(appData);
      
    });