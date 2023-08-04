"use strict";

// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта,
// а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (personalPlanPeter) {
    const { age } = personalPlanPeter;
    const { languages } = personalPlanPeter.skills;

    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });
    return str;
  },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
