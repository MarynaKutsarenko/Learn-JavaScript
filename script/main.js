let lang = 'en';

let dayOfWeeksRu = ["'Понедельник',  'Вторник', 'Среда', 'Четверг',  'Пятница',  'Суббота',  'Воскресенье'" ];
let dayOfWeeksEng = ["'Monday',  'Tuesday',  'Wednesday',  'Thursday',  'Friday',  'Saturday',  'Sunday'" ];

let arr = [
  ["'Понедельник',  'Вторник', 'Среда', 'Четверг',  'Пятница',  'Суббота',  'Воскресенье'" ],
  ["'Monday',  'Tuesday',  'Wednesday',  'Thursday',  'Friday',  'Saturday',  'Sunday'" ]
]

console.log(arr[0]);

if (lang == 'ru') {
  console.log(dayOfWeeksRu);
} else if (lang == 'en') {
  console.log(dayOfWeeksEng);
} else {
  console.log('Извините! такой язык мы не поддерживаем');
}

switch (lang) {
  case 'ru':
    console.log(dayOfWeeksRu);
  break;
  case 'en':
    console.log(dayOfWeeksEng);
  break;
  default:
    console.log('Извините! такой язык мы не поддерживаем');
  break;
}

let nameParson = 'Максим ';

nameParson == 'Артем' ? (
  console.log('директор')
) : (
  console.log('Максим'),
  console.log('преподаватель')
) 

let name = 'Артем' ;

name == 'Артем' ? console.log('директор') : console.log('студент');

