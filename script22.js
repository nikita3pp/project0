"use strict";

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  } else {
    return str.split("").reverse().join("");
  }
}

console.log(reverse(someString));

// *******************************

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";

  arr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  // arr.forEach(function (curr, i) {
  //   if (curr !== missingCurr) {
  //     str += `${curr}\n`;
  //   }
  // });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === missingCurr) {
      continue;
    }
    str += `${arr[i]}\n`;
  }

  return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "RUB"));
