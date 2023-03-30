'use strict';

let btnPlus = document.querySelector("#plus");
let btnMinus = document.querySelector("#minus");
let num = document.querySelector("#number");
let sum = 0;
num.textContent = sum;

btnPlus.addEventListener("click", () => {
  if (sum === 99) {
    num.textContent = sum;
  } else {
    sum++;
    num.textContent = sum;
  }
  num.classList.add("anim");
  setTimeout(() => num.classList.remove("anim"), 100);
});

btnMinus.addEventListener("click", () => {
  if (sum === 0) {
    num.textContent = sum;
  } else {
    sum--;
    num.textContent = sum;
  }
  num.classList.add("anim");
  setTimeout(() => num.classList.remove("anim"), 100);
});
