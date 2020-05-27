window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  let date = new Date();

  const weekArray = ['Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']; 
  
  let todaysDay = document.createElement('div');
  let time = document.createElement('div');
  let getDaysPart = document.createElement('div');
  let getDay = document.createElement('div');

  function getInfo() {
    
    let hours = addZero(date.getHours()),
        minutes = addZero(date.getMinutes()),
        seconds = addZero(date.getSeconds()),
        day = date.getDay(),

        dateStop = new Date('31 december 2020').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = Math.floor(timeRemaining / 60 / 60 / 24);

        day = weekArray[day];

    function buildInfo() {
      getDaysPart.innerHTML = checkPartOfDay(time);
      document.body.append(getDaysPart);
      todaysDay.innerHTML = ('Сегодня :' + ' ' + ' ' + day);
      document.body.append(todaysDay);
      time.innerHTML = ('Текущее время :'+ ' ' + hours + ':' + minutes + ':' + seconds);
      document.body.append(time);
      getDay.innerHTML = ('До нового года осталось:'+ ' ' + days);
      document.body.append(getDay);
    }

    buildInfo();
  }
  
  setInterval(getInfo(),  1000);

  function checkPartOfDay(time) {
    if (time >= 0 && time <= 6) {
      return ('Доброй ночи');
    } else if (time > 6 && time <= 12){
      return 'Доброе утро';
    } else if (time > 12 && time <= 18){
     return ( 'Доброй день');
    } else {
      return (' Добрый вечер');
    }

  }

    function addZero(num) {
      if (num >= 0 && num <=9) {
        return '0' + num;
      } else {
        return num;
      }
    }

    document.body.style.backgroundColor = 'yellowGreen';
    
});
