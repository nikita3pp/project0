// function learnJs(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log(`Я прошел этот урок!`);
// }

// learnJs("JavaScript", done);

const options = {
  namer: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);

console.log(Object.keys(options));

// console.log(options.colors.bg);

// delete options.namer;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);
