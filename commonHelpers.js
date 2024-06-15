import{i as c,S as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function m(t){return t.map(u).join(`
`)}function u(t){return`<li class="gallery-item">
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
      </li>`}function f(t){t.classList.remove("loader-hidden")}function d(t){t.classList.add("loader-hidden")}function g(t){const o="https://pixabay.com",r="/api/",i=new URLSearchParams({key:"44349742-ecc8a7b60aea5585f0c207813",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${i}`;return fetch(e).then(s=>s.json())}const y="/goit-js-hw-11/assets/icon-close-5bc7b79a.svg",n=document.querySelector(".search-form"),l=document.querySelector(".loader");n.addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements.query.value.trim();o.length!==0&&(f(l),g(o).then(r=>{if(r.hits.length===0)c.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:y,position:"topRight",theme:"dark"});else{const i=m(r.hits),e=document.querySelector(".gallery");e.innerHTML=i,new p(".gallery a").refresh()}console.log(r)}).catch(r=>{console.log(r)}).finally(()=>{d(l)})),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
