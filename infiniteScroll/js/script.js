document.addEventListener('DOMContentLoaded', () => {
  let whatAppend = 0;

  window.addEventListener('scroll', (e) => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    if ((window.pageYOffset + document.documentElement.clientHeight) >= scrollHeight - 1) {
      blockGenerator();
    }
  });

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function blockGenerator() {
    if (whatAppend != 40) {
      let div = document.createElement('div');
      div.classList.add('wrapper');
      div.style.background = `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${getRandomColor()}, ${getRandomColor()})`;
      document.body.append(div);
      whatAppend++;
    } else {
      let items = document.querySelectorAll('.wrapper');
      items[items.length - 1].textContent = 'Последний блок';
      document.body.removeEventListener('scroll', document.body);
    }
  }

});