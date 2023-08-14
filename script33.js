"use strict";

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }
}

console.log(node);
