window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  
  const weekArray = ['Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  let todaysDay = document.createElement('div');
  let time = document.createElement('div');
  let getDaysPart = document.createElement('div');
  let getDay = document.createElement('div');

  function getInfo() {
    let date = new Date();
    let hours = addZero(date.getHours()),
        minutes = addZero(date.getMinutes()),
        seconds = addZero(date.getSeconds()),
        day = date.getDay() - 1,
        currentDay = weekArray[day],
        days = newYearTimer();

    function buildInfo() {
      getDaysPart.innerHTML = checkPartOfDay();
      document.body.append(getDaysPart);
      todaysDay.innerHTML = ('Сегодня :' + ' ' + ' ' + currentDay);
      document.body.append(todaysDay);
      time.innerHTML = ('Текущее время :'+ ' ' + hours + ':' + minutes + ':' + seconds);
      document.body.append(time);
      getDay.innerHTML = ('До нового года осталось:'+ ' ' + days);
      document.body.append(getDay);
    }

    buildInfo();
  }

  getInfo();
  setInterval(getInfo,  1000);

  function checkPartOfDay() {

    let date = new Date(),
        time = date.getHours();

    if (time >= 0 && time <= 6) {
      return ('Доброй ночи');
    } else if (time > 6 && time <= 12){
      return 'Доброе утро';
    } else if (time > 12 && time <= 18){
      return ( 'Доброй день');
    } else {
      return (' Добрый вечер');
    }
    return time;
  }

  function addZero(num) {
    if (num >= 0 && num <=9) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function newYearTimer() {
    let date = new Date(),
        stopDate = new Date("January 1, 2021"),
        nowDate = date,
        msDay = 24 * 60 * 60 * 1000,
        daysCount = Math.round((stopDate.getTime() - nowDate.getTime()) / msDay),
        dayName = " ",
        dayString = " " + daysCount,
        cutDay = parseInt(dayString.substr(dayString.length - 1));

    if (cutDay > 4 && cutDay < 21) {
      dayName= "дней";
    } else if (cutDay == 1) {
      dayName = "день";
    } else if (cutDay == 2 || cutDay == 3 || cutDay == 4) {
      dayName = "дня";
    } else {
      dayName = "дней";
    }

    return `${daysCount} ${dayName}`;
  }

  document.body.style.backgroundColor = 'yellowGreen';

});