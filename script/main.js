'use strict'

let buttonCalculate = document.getElementById('start');
let buttonAddExpPlus = document.getElementsByTagName('button')[0];
let buttonIncomeExpPlus = document.getElementsByTagName('button')[1];
let checkDeposit = document.getElementById('deposit-check');
let inputAddIncome = document.querySelectorAll('.additional_income-item');
let inputBudgetMonth = document.getElementsByClassName('budget_month-value');
let inputBudgetDay = document.getElementsByClassName('budget_day-value');
let inputExpensesMonth = document.getElementsByClassName('expenses_month-value');
let inputAdditionalIncome = document.getElementsByClassName('additional_income-value');
let inputAdditionalExpenses = document.getElementsByClassName('additional_expenses-value');
let inputIncomePeriod = document.getElementsByClassName('income_period-value');
let inputTargetMonth = document.getElementsByClassName('target_month-value');
let inputRange = document.querySelector('.period-select');
let inputTargetAmount = document.querySelector('.target-amount');
let inputDepositPercent = document.querySelector('.deposit-percent');
let inputDepositAmount = document.querySelector('.deposit-amount');
let selectDepositBank = document.querySelector('.deposit-bank');
let inputEdditionalExpenses = document.querySelector('.additional_expenses-item');
let buttonExpensesAdd = document.querySelector('.expenses_add');
let inputExpensesAmount = document.querySelector('.expenses_add');
let inputExpensesTitle = document.querySelector('.expenses-title');
let inputIncomeAmount = document.querySelector('.income-amount');
let inputIncomeTitle = document.querySelector('.income-title');
let inputSalaryAmount = document.querySelector('.salary-amount');
