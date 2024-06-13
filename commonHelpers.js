(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n=document.querySelector(".search-form");function c(t){const s="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44349742-ecc8a7b60aea5585f0c207813",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${o}?${i}`;return fetch(e).then(r=>r.json())}n.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.query.value;c(s).then(o=>{const i=l(o.hits),e=document.querySelector(".gallery");e.innerHTML=i,console.log(o.hits)}).catch(o=>{})});function l(t){return t.map(p).join(`
`)}function p(t){return`<li class="gallery-item">
        <a class="gallery-link" href="#">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>

        <ul class="property">
          <li class="property__item">
            <p class="property__name">Likes</p>
            <p class="item-prop__quantity">${t.likes}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Views</p>
            <p class="item-prop__quantity">${t.views}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Comments</p>
            <p class="item-prop__quantity">${t.comments}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Downloads</p>
            <p class="item-prop__quantity">${t.downloads}</p>
          </li>
        </ul>
      </li>`}
//# sourceMappingURL=commonHelpers.js.map
