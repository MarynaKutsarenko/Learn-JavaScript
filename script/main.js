'use strict'
let isNumber = function(n){
  return !isNaN(parseFloat(n) && isFinite(n));
}

let name = prompt('Привет, как тебя зовут?', 'Mary');

  while ((name.trim()) == ''){
    name = prompt('Пожалуйста, введите корректное имя!');
  }

alert(name + ', Я загадала число от 1 до 100. Попробуй отгадать его ;) ');

let numberOfGuesses = 0;

function letPlay() {
  let number = Math.ceil(Math.random() * 100);
  console.log(number);

  let guess = prompt(' Какое число я загадала?');
      if (guess == null)
        return ;

  function letGuess() {
    while (!isNumber(guess)){
      guess = prompt('Введите число')
    }

    if (number > guess ) {
      guess = prompt('Загаданное число больше, попробуйте еще раз');
      numberOfGuesses = numberOfGuesses + 1;
      letGuess();
    }
    if (number < guess ) {
      guess = prompt('Загаданное число меньше, попробуйте еще раз');
      numberOfGuesses = numberOfGuesses + 1;
      letGuess();
    }
  }
  return letGuess();
}
letPlay();

alert(' Поздровляю вы угадали, Вам понадобилось: ' + numberOfGuesses + ' попыток');


// function recursia(number) {
//   number--;
//   console.log(number);

//   if (number > 0) {
//     recursia(number);
//   }

// }
// recursia(10);