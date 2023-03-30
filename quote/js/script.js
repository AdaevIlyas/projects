document.addEventListener('DOMContentLoaded', () => {

  const arrayOfQuotes = [
    {
      'author': 'Ф. Достоевский',
      'quote': 'Жизнь задыхается без цели.'
    },
    {
      'author': 'Н. Хилл',
      'quote': 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь.'
    },
    {
      'author': 'А. Эйнштейн',
      'quote': 'Стремитесь не к успеху, а к ценностям, которые он дает.'
    },
    {
      'author': 'Ф. Достоевский',
      'quote': 'Надо любить жизнь больше, чем смысл жизни.'
    },
    {
      'author': 'Д. Леннон',
      'quote': 'Жизнь - это то, что с тобой происходит, пока ты строишь планы.'
    },
    {
      'author': 'Сократ',
      'quote': 'Неосмысленная жизнь не стоит того, чтобы жить.'
    },
    {
      'author': 'Стив Джобс',
      'quote': 'Ваше время ограничено, не тратьте его, живя чужой жизнью.'
    },
    {
      'author': 'Н. Бонапарт',
      'quote': 'В моем словаре нет слова «невозможно».'
    },
    {
      'author': 'Конфуций',
      'quote': 'У всего есть своя красота, но не каждый может ее увидеть.'
    },
    {
      'author': 'Э. Найтингейл',
      'quote': 'Мы становимся тем, о чем мы думаем.'
    },
  ];

  let counter = 0;

  generateQuote();

  function generateQuote() {
    if (counter === arrayOfQuotes.length) {
      counter = 0;
    }
    document.querySelector('.quote__text').textContent = arrayOfQuotes[counter].quote;
    document.querySelector('.quote__author').textContent = arrayOfQuotes[counter].author;
    counter++;
  }

  document.querySelector('.quote__btn').addEventListener('click', () => {
    generateQuote();
  });
});