"use strict";

let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (i = 0; i < 3; i++) {
//   console.log(i);
//   for (j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// for (let i = 0; i < 3; i++) {
//   console.log(`first level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       console.log(`third level: ${k}`);
//     }
//   }
// }

first: for (let i = 0; i < 3; i++) {
  console.log(`first level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`second level: ${j}`);
    for (let k = 0; k < 5; k++) {
      if (k === 2) break first;
      console.log(`third level: ${k}`);
    }
  }
}
