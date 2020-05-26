window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  document.body.style.backgroundColor = 'yellowGreen';
  let date = new Date();
  const weekArray = ['Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']; 
  

  function getTime() {

     let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        day = date.getDay();
        
    day = weekArray[day];
        console.log(day);
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