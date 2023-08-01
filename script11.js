function getMathResult(oneNumber, twoNumber) {
  if (typeof twoNumber != "number" || twoNumber <= 0) {
    return oneNumber;
  }

  let str = "";

  for (let i = 1; i <= twoNumber; i++) {
    if (i === twoNumber) {
      str += `${oneNumber * i}`;
      //   str = str + oneNumber * i;
    } else {
      str += `${oneNumber * i}---`;
      //   str = str + oneNumber * i + "---"
    }
  }

  return str;
}

getMathResult(5, 3);
