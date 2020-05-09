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

  class AppData {

    constructor() {
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
    }

    isNumber(n){
      return !isNaN(parseFloat(n) && isFinite(n));
    }

    checkString(line){
      return isNaN(parseFloat(line)) && line !== '';
    }

    start(){

      this.budget = +inputSalaryAmount.value;

      this.getIncome();
      this.getExpenses();
      this.getExpensesMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget ();
      this.getTargetMonth();
      this.blockInputs();

      this.showResult();

      buttonCalculate.style.display = 'none';
      cancel.style.display = 'block';
    }

    showResult(){
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
    }

    addExpensesBlock(){
          
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonIncomeExpPlus);
      expensesItems = document.querySelectorAll('.expenses-items');

      if (expensesItems.length === 3) {
        buttonIncomeExpPlus.hidden = true;
      }
    }

    addIncomeBlock(){
      let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, buttonAddExpPlus);
        incomeItems = document.querySelectorAll('.income-items');

      if (incomeItems.length === 3) {
        buttonAddExpPlus.hidden = true;
      }
    }

    getExpenses(){

      expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
          if (itemExpenses !== '' && cashExpenses);
            this.expenses[itemExpenses] = cashExpenses;
      });
    }

    getIncome(){
    
      incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome) {
            this.income[itemIncome] = cashIncome;
          }
      });

      for (let key in this.income){
        this.incomeMonth += +(this.income[key]);
      }
    }

    getAddExpenses(){

      let addExpenses = inputAdditionalExpenses.value.split(',');
            addExpenses.forEach(function(item){
             item = item.trim();
              if (item !== '') {
                this.addExpenses.push(item);
              }
            });
    }

    getAddIncome(){

      inputAddIncome.forEach(function(item){
      let itemValue = item.value.trim();
          if (itemValue !== '') {
            this.addIncome.push(itemValue);
          }
      });
    }

    getBudget(){
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay = + this.budgetMonth / 30 ;
    }

    getExpensesMonth(){

      for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
      }
    }

    getTargetMonth(){
      return inputTargetAmount.value / this.budgetMonth;
    }

    getStatusIncome(){
      if ( this.budgetDay >= 1200 ){
        return ('У вас высокий уровень дохода');
      } else if ( this.budgetDay >= 600 && this.budgetDay  < 1200){
        return ('У вас средний уровень дохода');
      }else if ( this.budgetDay < 600 && this.budgetDay >= 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else {
        return ('Произошла ошибка');
      }
    }
    
    getInfoDeposit(){
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
    }

    calcSavedMoney(){
      return this.budgetMonth * Number(inputRange.value);
    }

    changeRangeValue(){
      periodAmount.textContent = inputRange.value ;
    }

    checkButtonCalculate(){
      if (inputSalaryAmount.value === '' || !isNumber(inputSalaryAmount.value)) {
        buttonCalculate.setAttribute('disabled', 'true');
      } else {
        buttonCalculate.removeAttribute('disabled');
      }
    }

    blockInputs(){
      let inputsData = document.querySelector('.data').querySelectorAll('input[type=text]');
      for (let item of inputsData){
        if (resetButton) {
          item.setAttribute('disabled', 'true');
        } else  {
          item.removeAttribute('disabled');
        }
      }
    }

    blockReset(){
  
      blockInputs();

      buttonCalculate.style.display = 'block';
      cancel.style.display = 'none';
      inputRange.value = 0;
      periodAmount.value = 0;

      let inputsData = document.querySelector('.data').querySelectorAll('input[type=text]');
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
    }

    eventListeners(){

      start.addEventListener('click', this.start.bind(this));

      resetButton.style.disply = 'block';
      inputSalaryAmount.addEventListener('change', this.checkButtonCalculate);
      buttonCalculate.addEventListener('click', this.start.bind(this));
      resetButton.addEventListener('click', this.blockReset.bind(this));
      buttonIncomeExpPlus.addEventListener('click', this.addExpensesBlock);
      buttonAddExpPlus.addEventListener('click', this.addIncomeBlock);
      inputRange.addEventListener('input', this.changeRangeValue);
    }
  }

  const newData = new AppData();

  console.log(newData);

});