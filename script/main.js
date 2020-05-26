window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  document.body.style.backgroundColor = 'yellowGreen';

  let date = new Date();

  const weekArray = ['Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']; 
  let todaysDay = document.createElement('div');
  let time = document.createElement('div');


  function getTime() {

     let hours = date.getHours(),
         minutes = date.getMinutes(),
         seconds = date.getSeconds(),
         day = date.getDay();
        
    day = weekArray[day];

    todaysDay.innerHTML = 'Сегодня :' + ' ' + day;
    document.body.append(todaysDay);
    
    setInterval(function(){
      time.innerHTML = ('Текущее время :' + ' ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + 'PM');
      document.body.append(time);
    },1000);

  }

  getTime();

  function addZero(num) {
    if (num >= 0 && num <=9) {
      return '0' + num;
    } else {
      return num;
    }
  }

});