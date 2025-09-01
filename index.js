import{a as d,S as v,N as y,P as h}from"./assets/vendor-Dat0JyPq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function w(){return(await d.get("/feedbacks",{params:{limit:10,page:1}})).data}async function L(e){const s=document.querySelector("div.swiper-wrapper"),n=e.map(({name:t,rating:r,descr:i},g)=>`<div class="swiper-slide">
            <div class="rating" id="rating">
                <div class="stars-container stars-${g}">
                </div>
            </div>
            <p class="review">"${i}"</p>
            <p class="review-author-name">${t}</p>
        </div>`).join("");s.insertAdjacentHTML("beforeend",n),e.forEach((t,r)=>{b(t.rating,r)});const a=new v(".swiper",{modules:[y,h],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.querySelector(".swiper-button-next").addEventListener("click",()=>a.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>a.slidePrev())}function b(e,s){const n=document.querySelector(`div.stars-${s}`),a=Math.round(e),t=5-a;n.innerHTML="";for(let r=0;r<a;r++){const i=document.createElement("div");i.classList.add("star-container"),i.innerHTML=`
            <svg class="star my-star-filled">
                <use href="../img/icons.svg#icon-star"></use>
            </svg>`,n.appendChild(i)}for(let r=0;r<t;r++){const i=document.createElement("div");i.classList.add("star-container"),i.innerHTML=`
            <svg class="star my-star-empty">
                <use href="../img/icons.svg#icon-star"></use>
            </svg>`,n.appendChild(i)}}const $="https://sound-wave.b.goit.study/api",u=8,p=d.create({baseURL:$,timeout:1e4,headers:{"Content-Type":"application/json"}});async function S(e=1,s=u){return(await p.get("/artists",{params:{page:e,limit:s}})).data}function E(e){var s;return`
    <div class="artist-card">
      <img class="artist-photo" src="${e.strArtistThumb||"https://via.placeholder.com/150"}" alt="${e.strArtist}" />

      <div class="artist-genres">
        ${((s=e.genres)==null?void 0:s.map(n=>`<span>${n}</span>`).join(""))||""}
      </div>

      <h3 class="artist-name">${e.strArtist}</h3>
      <p class="artist-description">
        ${e.strBiographyEN?e.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${e._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="24" height="24">
                <use href="/img/icons.svg#icon-learn-more"></use>
              </svg>
      </button>
    </div>
  `}const m=document.querySelector("[data-artists-grid]"),o=document.querySelector("[data-artists-load]"),l=document.querySelector("[data-artists-loader]");let c=1;async function f(e=1){l.hidden=!1,o.hidden=!0;try{const s=await S(e);console.log("API response:",s),m.insertAdjacentHTML("beforeend",s.artists.map(E).join("")),e*u<s.totalArtists&&(o.hidden=!1)}catch(s){console.error("Помилка завантаження артистів:",s)}finally{l.hidden=!0}}o==null||o.addEventListener("click",async()=>{c++,await f(c)});document.addEventListener("DOMContentLoaded",()=>{f(c)});m.addEventListener("click",async e=>{if(e.target.matches(".learn-more")){const s=e.target.dataset.id;try{const a=(await p.get(`/artists/${s}`)).data,t=document.querySelector("[data-modal-content]");t.innerHTML=`
        <img src="${a.photo}" alt="${a.name}"/>
        <h2>${a.name}</h2>
        <p>${a.description}</p>
      `,document.querySelector("[data-modal]").classList.add("is-open")}catch(n){console.error("Не вдалося завантажити артиста:",n)}}});d.defaults.baseURL="https://sound-wave.b.goit.study/api";async function A(){const e=await w();console.log(e),await L(e.data)}A();
//# sourceMappingURL=index.js.map
