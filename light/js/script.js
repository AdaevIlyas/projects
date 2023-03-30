const btn = document.querySelector('.btn'),
  body = document.querySelector('body');

btn.addEventListener('click', () => {
  body.classList.toggle('on');
});