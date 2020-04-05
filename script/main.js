'use strict'
let isNumber = function(n){
  return !isNaN(parseFloat(n) && isFinite(n));
}

let name = prompt('Привет, как тебя зовут?', 'Mary');

  while ((name.trim()) == ''){
    name = prompt('Пожалуйста, введите корректное имя!');
  }

alert(name + ', Я загадала число от 1 до 100. Попробуй отгадать его ;) ');

const letPlay = function() {

  let number = Math.ceil(Math.random() * 100);
  console.log(number);
  let numberOfGuesses = 0;
  let guess = prompt(' Какое число я загадала?');

  function letGuess() {

    if (isNumber(guess)){
      guess = +guess;
      if (number > guess ) {
        guess = prompt('Загаданное число больше, попробуйте еще раз');
        numberOfGuesses = numberOfGuesses + 1;
        letGuess();
      }  else if (number < guess ) {
        guess = prompt('Загаданное число меньше, попробуйте еще раз');
        numberOfGuesses = numberOfGuesses + 1;
        letGuess();
      } else {
        alert(' Поздровляю вы угадали, Вам понадобилось: ' + numberOfGuesses + ' попыток');
      }
    } else if (guess === null) {
      alert(' Спасибо за игру. Досвидание!');
    } else {
      guess = prompt('Введите число!');
    }
  }
  return letGuess();
}

const startGame = letPlay();

