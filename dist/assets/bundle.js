"use strict";

var p = document.querySelector("p");
p.textContent = "Updated p tag! again tttt";
var name = "Oscar";
var greeting = function greeting() {
  console.log("Hello ".concat(name));
};
greeting();
