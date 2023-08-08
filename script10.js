"use strict";

const usdCurr = 28;
const discount = 0.9;

// функция конвертирует валюту
function convert(amount, curr) {
  return curr * amount;
  //   return function() {}  пример
}

// функция выводит в консоль цену со скидкой - скидку из переменной умножаем на параметр в который подставляем аргумент в виде..
// .. результата работы функции convert
function promotion(result) {
  console.log(result * discount);
  //   return undefined  на уровне движка так, но это не показывается - функция всегда что то возвращает
}

// записываем в переменную res результат работы функции convert
const res = convert(500, usdCurr);

// подставляем в параметр функции вызов другой функции
promotion(res);

// 2 вариант (хуже)
// promotion(convert(500, usdCurr));

// *****

function test() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log("done");
}

test();

// *****

function doNothing() {}
console.log(doNothing() === undefined);
