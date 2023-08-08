"use strict";

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(favoriteCities) {
  let str = "";

  favoriteCities.forEach((city) => {
    str += `${city} \n`;
  });

  return str.toLowerCase();
}

// console.log(standardizeStrings(favoriteCities));

function standardizeStrings(favoriteCities) {
  let str = "";
  str = favoriteCities.join(" \n").toLowerCase();

  return str;
}

console.log(standardizeStrings(favoriteCities));
