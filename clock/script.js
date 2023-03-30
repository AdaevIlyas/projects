'use strict';

let time = document.querySelector("#wrapper");

setInterval(() => {
  let timer = new Date();

  let seconds = timer.getSeconds();
  if (seconds < 10) {
    seconds = `0${timer.getSeconds()}`;
  }

  let minutes = timer.getMinutes();
  if (minutes < 10) {
    minutes = `0${timer.getMinutes()}`;
  }

  let hours = timer.getHours();
  if (hours < 10) {
    hours = `0${timer.getHours()}`;
  }

  const days = [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
  ];
  let day = timer.getDay();
  time.textContent = `${hours}:${minutes}:${seconds} ${days[day]}`;
}, 1000);
