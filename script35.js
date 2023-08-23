"use strict";

function factorial(num) {
  if (!Number.isInteger(num) || isNaN(num)) {
    return "Вы чего это такое ввели????????";
  } else if (num <= 0) {
    return (num = 1);
  } else {
    // let total = 0;
    // total += num * factorial(num - 1);

    // return total;

    return num * factorial(num - 1);
  }
}

console.log(factorial(5));
