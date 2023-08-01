"use strict";

const usdCurr = 28;
const eurCurr = 34;

function convert(amount, curr) {
  console.log(curr * amount);
  //   в кносоль (тело функции) лучше не вставлять переменную так как будет всегда значение переменной а нам нужно уневерсал
  //   польза доп аргумента
}

convert(500, usdCurr);
convert(500, eurCurr);
// под curr мы подставляем аргумент в виде переменной usdCurr
