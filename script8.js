"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 8));
console.log(calc(5, 6));

function ret() {
  let num = 50;
  //

  return num;
}

const anotherNum = ret();
console.log(anotherNum);
