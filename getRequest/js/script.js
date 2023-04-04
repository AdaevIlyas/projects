'use strict';

document.addEventListener('DOMContentLoaded', () => {

  let tableBody = document.querySelector('.table tbody');

  const getRequest = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      console.error('Ошибка сервера');
    } else {
      return await res.json();
    }
  };

  getRequest('https://jsonplaceholder.typicode.com/users').then(data => {
    createItem(data);
  });

  function createItem(res) {
    res.forEach(({ name, username, email, address }) => {
      let nameArr = name.split(' ');
      let trBox = document.createElement('tr');
      trBox.innerHTML =
        `
        <td data-name class='name'>${nameArr[0]}</td>
        <td data-surname class='surname'>${nameArr[1]}</td>
        <td data-username class='username'>${username}</td>
        <td data-city class='city'>${address.city}</td>
        <td data-street class='street'>${address.street}</td>
        <td data-suite class='suite'>${address.suite}</td>
        <td data-email class='email'>${email}</td>
      `;
      tableBody.append(trBox);
    });
  }
});