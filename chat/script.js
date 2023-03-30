'use strict';

let msg = document.querySelector('#message-template').content;
let msgBlock = msg.querySelector('.chat-message');
let chat = document.querySelector('.chat-content');
let chatMsg = chat.children;

function addMsg() {
  let item = msgBlock.cloneNode('true');
  let itemMsg = item.querySelector('p');
  let inputMsg = document.querySelector('.chat-form-input');
  itemMsg.textContent = inputMsg.value;
  chat.append(item);
  inputMsg.value = '';
}

let btn = document.querySelector('.chat-form');
btn.addEventListener('submit', function (e) {
  e.preventDefault();
  addMsg();
  for (let item of chatMsg) {
    let x = item.querySelector('.chat-message-button');
    x.addEventListener('click', () => {
      item.remove();
    });
  }
});
