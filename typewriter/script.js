document.addEventListener('DOMContentLoaded', () => {
  const elem = document.querySelector('.text-change');


  print(elem);

  function print(elem) {
    elem.textContent = '';
    // слова
    let arrStr = ['Layout designer', 'Frontend developer', 'Smart', 'Positive', 'Fast learner'], whatStr = 0;
    // заполнение блока
    let count = 0, newText = '';

    const addPrint = () => {

      let text = arrStr[whatStr];

      let interval = setInterval(() => {

        newText += text[count];
        elem.textContent = newText;

        count++;

        if (count === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            removePrint();
          }, 400);
        }

      }, 300);
    };

    const removePrint = () => {
      let interval = setInterval(() => {

        if (newText.length) {
          newText = newText.slice(0, -1);
          elem.textContent = newText;
          count--;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            if (whatStr === arrStr.length - 1) {
              whatStr = 0;
            } else {
              whatStr += 1;
            }
            addPrint();
          }, 700);
        }

      }, 300);
    };
    addPrint();
  }
});