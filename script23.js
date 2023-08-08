let str = "some";
let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

console.dir([1, 2, 3]);

// прототип солдата в общем

const soldier = {
  health: 400,
  armor: 100,
  sayHelloy: function () {
    console.log("Hello");
  },
};

const jonh = Object.create(soldier);

// конкретный солдат

// const jonh = {
//   health: 100,
// };

// Object.setPrototypeOf(jonh, soldier);

// несмотря на то что у объекта Джон всего 1 свойство благодаря прототипам (__prоto__) он получил также
// и броню, которая была у его прототипа
// console.log(jonh);
// console.log(jonh.armor);
console.log(jonh.sayHelloy());
