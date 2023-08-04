"use strict";

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

  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;
}

console.log(showProgrammingLangs(personalPlanPeter));
console.log(programmingLangs);
