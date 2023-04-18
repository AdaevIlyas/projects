document.addEventListener('DOMContentLoaded', () => {

  let day = new Date().getDay();

  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

  document.querySelector('.day').textContent = days[day];
});