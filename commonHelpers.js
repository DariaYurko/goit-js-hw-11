import{i as l,S as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function p(t){return t.map(m).join(`
`)}function m(t){return`<li class="gallery-item">
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
      </li>`}function u(t){const r="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44349742-ecc8a7b60aea5585f0c207813",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${i}`;return fetch(e).then(s=>s.json())}const f="/goit-js-hw-11/assets/icon-close-5bc7b79a.svg",n=document.querySelector(".search-form");n.addEventListener("submit",t=>{t.preventDefault();const r=t.target.elements.query.value.trim();r.length!==0&&u(r).then(o=>{if(o.hits.length===0)l.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:f,position:"topRight",theme:"dark"});else{const i=p(o.hits),e=document.querySelector(".gallery");e.innerHTML=i,new c(".gallery a").refresh()}console.log(o)}).catch(o=>{}),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
