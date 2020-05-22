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
    depositPercent = document.querySelector('.deposit-percent'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositBank = document.querySelector('.deposit-bank'),
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

    constructor(budget = 0, income = {}, addIncome = [], incomeMonth = 0, expenses = {}, addExpenses = [], deposit = false, percentDeposit = 0, moneyDeposit = 0, budgetDay = 0, budgetMonth = 0, expensesMonth = 0) {

      this.budget = budget;
      this.income = income;       
      this.addIncome = addIncome;  
      this.incomeMonth = incomeMonth;    
      this.expenses = expenses;      
      this.addExpenses = addExpenses;    
      this.deposit = deposit;
      this.percentDeposit = percentDeposit;
      this.moneyDeposit = moneyDeposit;
      this.budgetDay = budgetDay;
      this.budgetMonth = budgetMonth;
      this.expensesMonth = expensesMonth;

    }

    start(){

      this.budget = +inputSalaryAmount.value;

      this.checkButtonCalculate();
      this.getIncome();
      this.getExpenses();
      this.getExpensesMonth();
      this.getAddExpenses();
			this.getAddIncome();
			this.getInfoDeposit();
      this.getBudget ();
      this.getTargetMonth();
      this.blockInputs();

      this.showResult();

      buttonCalculate.style.display = 'none';
      cancel.style.display = 'block';
      
      if (isNaN(depositPercent.value) || depositPercent.value.trim() === '' || depositPercent.value > 100 || depositPercent.value <= 0) {
        this.changePercent.readOnly = true;
        alert('Значение в поле процент должно быть в диапазоне от 0 до 100');
        return;
      } 
    
      if (isNaN(depositAmount.value) || depositAmount.value.trim() === '') {
        this.changePercent.readOnly = true;
        alert('Значение в поле процент должно быть в диапазоне от 0 до 100');
        return;
      }
			
    }

    showResult(){

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

      const __this = this;
      expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
          if (itemExpenses !== '' && cashExpenses);
          __this.expenses[itemExpenses] = cashExpenses;
			});
			
    }

    getIncome(){

      const __this = this;

      incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome) {
            __this.income[itemIncome] = cashIncome;
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
                addExpenses.push(item);
              }
						});
						
    }

    getAddIncome(){

      const __this = this;

      inputAddIncome.forEach(function(item){
				let itemValue = item.value.trim();
						if (itemValue !== '') {
							__this.addIncome.push(itemValue);
						}
			});
			
    }

    getBudget(){

			const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);

      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
			this.budgetDay = + this.budgetMonth / 30 ;
			
    }

    getExpensesMonth(){

      const __this = this;

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
        
    getInfoDeposit(){

      if (this.deposit){
				this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
      }
			 
    }

		changePercent(){

      const valueSelect = this.value;

				if (valueSelect === 'other') {
          depositPercent.style.display = 'inline-block';
				} else {
          depositPercent.value = valueSelect;
          depositPercent.style.display = 'none';
        }
        
		}
		
		depositHandler(){

			if (checkDeposit.checked) {
				depositBank.style.display = 'inline-block';
				depositAmount.style.display = 'inline-block';
				this.deposit = true;
				depositBank.addEventListener('change', this.changePercent);
			} else {
				depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositPercent.style.display = 'none';
				depositBank.value = '';
        depositAmount.value = '';
        depositPercent.value = '';
				this.deposit = false;
				depositBank.removeEventListener('change', this.changePercent);
      }
      

    }

    blockReset(){

      const __this = this;

        __this.blockInputs();

      buttonCalculate.style.display = 'block';
      cancel.style.display = 'none';
      inputRange.value = 0;
      periodAmount.textContent = 0;
      checkDeposit.checked = false;
      depositBank.value = '';
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';

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
			
			checkDeposit.addEventListener('change', this.depositHandler.bind(this));
    }

  }

  const isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
  };

  // checkString(line){
  //   return isNaN(parseFloat(line)) && line !== '';
  // };

  const newData = new AppData();

  newData.eventListeners();

});