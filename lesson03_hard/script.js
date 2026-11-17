'use strict';

// 1

const days = [
    ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, воскресенье"],
    ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"]
];

const languages = ["ru", "en"];

// ru || en
let lang = "ru";
// a
if (lang === "ru") {
    console.log(days[0])
} else {
    console.log(days[1])
}
// b
switch (lang) {
    case "en":
        console.log(days[1])
        break
    default:
        console.log(days[0])
}
// c
console.log(days[languages.indexOf(lang)])

// 2
let namePerson = "Артём";

namePerson === "Артём" ? console.log("директор") :
    namePerson === "Александр" ? console.log("преподаватель") :
        console.log("студент");

