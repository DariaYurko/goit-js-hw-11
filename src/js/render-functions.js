/**
 * Returns the finished markup
 * @param {Array} arr
 * @returns {String}
 */
export function imagesTamplate(arr) {
  return arr.map(imageTemplate).join('\n');
}



/**
 * Кeturns the markup for a single element
 * @param {Object} el
 * @returns {String}
 */
export function imageTemplate(el) {
  return `<li class="gallery-item">
        <a class="gallery-link" href="${el.largeImageURL}">
          <div class="gallery-image-thumb">
            <img class="gallery-image" src="${el.webformatURL}" alt="${el.tags}" />
          </div>
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
        </a>
      </li>`;
}



/**
 * Adds class 'hidden' to the element
 * @param {*} loader
 */
export function addLoader(loader) {
  loader.classList.remove('loader-hidden');
}



/**
 * Removes class 'hidden' to the element
 * @param {*} loader
 */
export function removeLoader(loader) {
  loader.classList.add('loader-hidden');
}
