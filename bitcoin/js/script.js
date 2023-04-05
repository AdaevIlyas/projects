'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const usd = document.querySelector('.bitcoin__usd'),
    eur = document.querySelector('.bitcoin__eur'),
    rub = document.querySelector('.bitcoin__rub'),
    arrMoney = document.querySelectorAll('.bitcoin__money span');

  const getRequest = async (url) => {
    let req = await fetch(url);

    if (!req.ok) {
      throw new Error(`Could not fetch ${url}, status: ${req.status}`);
    } else {
      return await req.json();
    }
  };

  getRequest('https://www.blockchain.com/ru/ticker')
    .then(data => {
      genMoney(data);
    })
    .catch(error => {
      console.log(error);
      arrMoney.forEach(item => item.textContent = 'Request error');
    });

  function genMoney(res) {
    usd.textContent = moneyNormalize(res.USD.last);
    eur.textContent = moneyNormalize(res.EUR.last);
    rub.textContent = moneyNormalize(res.RUB.last);
  }

  function moneyNormalize(num) {
    let fullMoney = `${num}`,
      point = fullMoney.match(/\./).index,
      cut = fullMoney.substring(point),
      newMoney = fullMoney.substring(0, point).split('').reverse().map((item, i) => i % 3 == 0 ? `${item} ` : item);

    if (cut.length == 2) {
      cut = cut + '0';
    }

    return newMoney.reverse().join('').trim() + cut;
  }

  setInterval(() => {
    getRequest('https://www.blockchain.com/ru/ticker')
      .then(data => {
        genMoney(data);
      })
      .catch(error => {
        console.log(error);
        arrMoney.forEach(item => item.textContent = 'Request error');
      });
  }, 60000);
});