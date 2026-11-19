'use sctrict';

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",]

const date = new Date();
const currentDay = (new Date().getDay() + 6) % 7;

week.forEach(function (day, index) {
    if (index === currentDay) {
        console.log(`%c${day}`, 'font-weight: bold;');
    } else if (index === 5 || index === 6) {
        console.log(`%c${day}`, 'font-style: italic;');
    } else {
        console.log(day);
    }
});