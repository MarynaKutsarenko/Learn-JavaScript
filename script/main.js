let money = 5000,
    income = 'фриланс',
    addExpenses = 'тренажерка Интернет кваРтплата',
    deposit = true,
    mission = 80000,
    period = 7,
    budgetDay = money / 30;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log('Период равен ', period , ' месяцнв, ' , ' Цель заработать ', mission, 'рублей/долларов/гривен/юани ');

console.log(addExpenses.toLowerCase().split(' '));

console.log(Math.round(budgetDay));