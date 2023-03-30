'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const form = () => {
    const form = document.querySelector('form'),
      statusMessage = document.querySelector('.status'),
      inputs = document.querySelectorAll('input');

    const message = {
      load: 'Загрузка...',
      success: 'Отправлено',
      error: 'Ошибка'
    };

    const clearInput = () => {
      inputs.forEach(item => {
        if (item.getAttribute('type') == 'checkbox') {
          item.checked = false;
        } else {
          item.value = '';
        }
      });

      document.querySelector('textarea').value = '';
      statusMessage.style.display = 'none';
    };

    const postData = async (url, info) => {
      statusMessage.style.display = 'block';
      statusMessage.textContent = message.load;

      let res = await fetch(url, {
        method: 'POST',
        body: info
      });

      return await res.text();
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const newInfo = new FormData(form);

      postData('./server.php', newInfo)
        .then(res => {
          statusMessage.style.display = 'block';
          statusMessage.textContent = message.success;

          console.log(res);
        })
        .catch(() => {
          statusMessage.style.display = 'block';
          statusMessage.textContent = message.error;

          console.error('Ошибка отправленной формы');
        })
        .finally(() => {
          setTimeout(clearInput, 2000);
        });
    });
  };

  const mask = (selector) => {
    function setCursorPosition(pos, elem) {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);

        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    function createMask(event) {
      let matrix = '+7 (___) ___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  };


  form();
  mask('.form__phone');
});