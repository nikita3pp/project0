"use strict";

// Напишите функцию showProgrammingLangs, которая будет принимать в себя объект
// со всеми данными и возвращать строку в нужном виде.

// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков.
// Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

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
};

function showProgrammingLangs(personalPlanPeter) {
  let str = "";

  const { programmingLangs } = personalPlanPeter.skills;
  console.log(programmingLangs);

  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;
}

console.log(showProgrammingLangs(personalPlanPeter));
