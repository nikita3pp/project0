"use strict";

function foo(a, b) {
  const [first] = a;
  const { eng } = b;
  console.log(first);
  return `${first} ${eng}`;
}

const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });

// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?

let x = 5;
alert(x++);

// 7

// •	Чему равно такое выражение: [ ] + false - null + true ?

// []

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// 2

// •	Чему равна сумма [ ] + 1 + 2?

// []

// •	Что выведет этот код: alert( "1"[0] )?

// undefinid

// •	Чему равно 2 && 1 && null && 0 && undefined ?

// 2

// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

//  нет

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// 4

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// да

// •	Что выведет этот код: alert( +"Infinity" ); ?

// 0

// •	Верно ли сравнение: "Ёжик" > "яблоко"?

// да

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?

// true
