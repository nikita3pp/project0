const family = ["nik", "lin"];

function showFamily(family) {
  let composition = "";

  if (family.length === 0) {
    composition = "Семья пуста";
  } else {
    composition = `Семья состоит из: ${family.join(" ")}`;
  }

  return composition;
}

console.log(showFamily(family));

//

function showFamily(arr) {
  let str = "";

  arr.length === 0 ? (str = "Семья пуста") : (str = "Семья состоит из: ");

  arr.forEach((member) => {
    str += `${member} `;
  });

  //   arr.forEach(function (member) {
  //     str += `${member} `;
  //   });

  return str;
}

showFamily(family);
