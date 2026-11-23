'use strict';
const fullTime = document.querySelector('#time-full');
const shortTime = document.querySelector('#time-short');

const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const hours = ['час', 'часа', 'часов'];
const minutes = ['минута', 'минуты', 'минут'];
const seconds = ['секунда', 'секунды', 'секунд'];

const declensionNum = function (number, words) {
    const lastTwoNum = number % 100;
    const lastNum = number % 10;

    if (lastTwoNum >= 11 && lastTwoNum <= 14) {
        return words[2];
    }

    if (lastNum === 1) {
        return words[0];
    }

    if (lastNum >= 2 && lastNum <= 4) {
        return words[1];
    }

    return words[2];
};

const currentDate = function () {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const weekDay = date.getDay();
    const month = date.getMonth();
    const monthShort = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    fullTime.textContent = `Сегодня ${weekDays[weekDay]}, ${day} ${months[month]} ${year}, 
        ${hour} ${declensionNum(hour, hours)} 
        ${minute} ${declensionNum(minute, minutes)} 
        ${second} ${declensionNum(second, seconds)}`;


    shortTime.textContent = `${day}.${monthShort}.${year} - ${hour}:${minute}:${second}`;
};

currentDate();
setInterval(currentDate, 1000);

