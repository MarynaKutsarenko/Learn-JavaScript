window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  function countTimerDown(deadline) {

    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    let timerId;
    

    function getTimerRemaining() {

      let dateNow = new Date().getTime(),
          dateStop = new Date(deadline).getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = addZero(Math.floor(timeRemaining % 60)),
          minutes = addZero(Math.floor(timeRemaining / 60) % 60),
          hours = addZero(Math.floor(timeRemaining / 60 / 60));

      return{timeRemaining, hours, minutes, seconds, dateStop, dateNow};
    }

    timerId = setInterval(function () {
      let timer = getTimerRemaining();
      
          timerHours.textContent = timer.hours;
          timerMinutes.textContent = timer.minutes;
          timerSeconds.textContent = timer.seconds;

          if (timer.timeRemaining <= 0) {

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';

            clearInterval(timerId);

          } else { return; }
          
    }, 1000);


    function addZero(num) {
      if (num >= 0 && num <= 9) {
        return '0' + num;
      } else {
        return num;
      }
    }
  }

  countTimerDown('2 juni 2020 22:53:00 ');

});