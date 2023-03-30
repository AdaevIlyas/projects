'use strict';

let longread = document.querySelector('.longread');
let colorSetting = document.querySelector('.color-setting');
let sizeSetting = document.querySelector('.size-setting');
let pixels = document.querySelector('.pixels');
let backgroundSetting = document.querySelector('.background-setting');

colorSetting.addEventListener('change', () => longread.style.color = colorSetting.value);

sizeSetting.addEventListener('input', () => {
  pixels.textContent = sizeSetting.value;
  longread.style.fontSize = sizeSetting.value + 'px';
});

backgroundSetting.addEventListener('change', () => longread.style.backgroundColor = backgroundSetting.value);
