"use strict";

console.log(typeof String(null));

console.log(typeof (5 + ""));

const fontSize = 5 + "px";

console.log(typeof +"5");

console.log(typeof parseInt("15px", 10));
console.log(parseInt("15px", 10));

let switcher = null;

// если неправда то условие не выполняется

if (switcher) {
  console.log("Working...");
}

switcher = 1;

if (switcher) {
  console.log("Working...");
}

console.log(typeof Boolean("4"));

console.log(typeof !!"4");
