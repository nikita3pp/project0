function fib(number) {
  if (isNaN(number) || Number.isInteger(number) || number <= 0) {
    return "";
  }

  let a = 0;
  let b = 1;
  let fibStr = "";

  for (let i = 0; i < number; i++) {
    if (i + 1 === number) {
      fibStr += `${a}`;
    } else {
      fibStr += `${a} `;
    }

    let c = a + b;
    a = b;
    b = c;
  }
  return fibStr;
}

fib(7);
console.log(fib());
