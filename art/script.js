'use strict';

let pixels = document.querySelectorAll('.pixel');
let colorBg = document.querySelector('.chosen-color');
let check = document.querySelector('.eraser');

for (let pixel of pixels) {
  pixel.addEventListener('click', () => {
    pixel.style.backgroundColor = colorBg.value;
    if (check.checked) {
      pixel.style.backgroundColor = 'white';
    }
  });
}
