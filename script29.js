"use strict";

// let number = 5;
// debugger;

// function logNumber() {
//   console.log(number);
//   debugger;
// }

// number = 6;

// logNumber();
// debugger;

// number = 8;

// logNumber();
// debugger;

function createCounter() {
  let counter = 0;

  // сначала создается переменная meFunction со значенем undefined, а уже потом в нее (переменную) помещется функция
  // замыкание локальное функции myFunction идет в рамках ЕЁ { }
  // также функция имеет ссылочку на внешний counter = 0; эта функция сохраняет в себе ссылки которые ей были доступны во время создания
  const myFunction = function () {
    debugger;
    counter = counter + 1;
    debugger;
    return counter;
    debugger;
  };

  return myFunction;
}
debugger;
// создаем переменную изначально ее значение undefined, мы записываем в нее вызов функции createCounter
// после этого она начинает запускать код из своего тела
// каждая функция что-то возвращает (будь то значение, объект или undefined). Что бы не вернула функция, это будет присвоено переменной increment.
const increment = createCounter();
debugger;

// при вызове мы сразу переходим к counter = counter + 1; и смотреим есть ли локально значение у counter
// его нет поэтому мы обращаемся к глобальному counter = 0
const c1 = increment();
debugger;
// при следующем вызове создается новое лексическое окружение (глобальное/локальное) и counter глобальный будет 1 (т к на момент return он был 1)
const c2 = increment();
debugger;
const c3 = increment();
debugger;

console.log(c1, c2, c3);

// эта переменная доступна только внутри лексического окружения скобок
{
  let msg = "Hello";
}

console.log(msg);
