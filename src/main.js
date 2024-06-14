import { imagesTamplate, imageTemplate } from './js/render-functions.js';
import { getImages } from './js/pixabay-api.js';


import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iconClose from './img/icon-close.svg';

const formEl = document.querySelector('.search-form');
// ---------------------------------------------------------

// ---------------------------------------------------------
formEl.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();

  if (query.length !== 0) {
    getImages(query)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.show({
            class: 'izt-toast-message',

            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageSize: '16',
            messageLineHeight: '24',
            messageColor: '#ffffff',

            backgroundColor: '#b51b1b',
            iconUrl: iconClose,
            position: 'topRight',
            theme: 'dark',
          });
        } else {
          const markup = imagesTamplate(data.hits);
          const ulEl = document.querySelector('.gallery');
          ulEl.innerHTML = markup;

          const lightbox = new SimpleLightbox('.gallery a');
          lightbox.refresh();
        }
        console.log(data);
      })
      .catch(error => {
        // Promise rejected
      });
  }

  formEl.reset();
});
