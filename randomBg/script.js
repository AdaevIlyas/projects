document.addEventListener('DOMContentLoaded', () => {
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    btn.parentElement.style.background = getRandomColor();
  });

});