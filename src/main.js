import './js/render-functions.js';
import './js/pixabay-api.js';

const formEl = document.querySelector('.search-form');

function getImages(imageName) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44349742-ecc8a7b60aea5585f0c207813',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(response => response.json());
}

// ----------------------------------------------------------------------------------------------------------------

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const searchImage = event.target.elements.query.value;

  getImages(searchImage)
    .then(data => {
      const markup = imagesTamplate(data.hits);
      const ulEl = document.querySelector('.gallery');
      ulEl.innerHTML = markup;
      console.log(data.hits);
    })
     
    .catch(err => {});
});

// ----------------------------------------------------------------------------------------------------------------

function imagesTamplate(arr) {
  return arr.map(imageTemplate).join('\n');
}

function imageTemplate(el) {
  return `<li class="gallery-item">
        <a class="gallery-link" href="#">
          <img class="gallery-image" src="${el.webformatURL}" alt="${el.tags}" />
        </a>

        <ul class="property">
          <li class="property__item">
            <p class="property__name">Likes</p>
            <p class="item-prop__quantity">${el.likes}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Views</p>
            <p class="item-prop__quantity">${el.views}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Comments</p>
            <p class="item-prop__quantity">${el.comments}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Downloads</p>
            <p class="item-prop__quantity">${el.downloads}</p>
          </li>
        </ul>
      </li>`;
}
