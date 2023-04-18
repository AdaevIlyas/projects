// токен API 6c6f3a7559434f309515cac0935ae197


const getRuquest = async (url) => {
  let result = await fetch(url);

  return await result.json();
};

getRuquest('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6c6f3a7559434f309515cac0935ae197')
  .then(data => {
    console.log(data);

    let { articles } = data;

    for (let i = 0; i < 10; i++) {
      createItem(articles[i]);
    }
  });


function createItem({ title, author, url, publishedAt },) {
  let li = document.createElement('li');
  li.classList.add('list__item');

  let titleEl = document.createElement('h3');
  titleEl.textContent = `${title} `;
  li.append(titleEl);

  let authorEl = document.createElement('p');
  authorEl.style.cssText = `margin-bottom: 10px; font-style: italic;`;
  authorEl.textContent = `Автор: ${author} `;
  li.append(authorEl);

  let data = document.createElement('p');
  data.textContent = `Дата публикациии: ${publishedAt.slice(0, 10)}`;
  li.append(data);

  let urlEl = document.createElement('a');
  urlEl.textContent = 'К источнику';
  urlEl.href = url;
  li.append(urlEl);

  document.querySelector('.list').append(li);
}
