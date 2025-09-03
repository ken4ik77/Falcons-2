import{a as h,S as $,N as k,P as q}from"./assets/vendor-DeWL0fjv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();async function w(){const e=document.querySelectorAll(".learn-more"),s=document.querySelector("[data-artists-loader]");e.forEach(i=>{i.addEventListener("click",async()=>{s.hidden=!1;const r=i.dataset.id;try{const a=(await h.get(`/artists/${r}/albums`)).data,c=document.querySelector(".artist-modal"),d=document.querySelector(".artist-info");d.innerHTML=M(a),c.classList.remove("hidden-artist-modal")}catch(t){console.error("Error loading artist info:",t)}finally{s.hidden=!0}})})}const x=document.querySelector(".close-artist-modal");x.addEventListener("click",()=>{document.querySelector(".artist-modal").classList.add("hidden-artist-modal")});function M(e){var s,i;return`
    <h2 class="artist-name">${e.strArtist}</h2>
    <div class="det_info">
      <img src="${e.strArtistThumb}" class="artist-img" alt="${e.strArtist}">
      <ul class="artist-details">
        <li>Years active<br>
        ${e.intFormedYear||"?"} – ${e.intDiedYear||"present"}</li>
        <li>Sex<br>
        ${e.strGender||"?"}</li>
        <li>Members<br>
        ${e.intMembers||"?"}</li>
        <li>Country<br>
        ${e.strCountry||"?"}</li>
        <li>Biography<br>
        ${e.strBiographyEN||"No info"}</li>
        <li>
          <ul class="artist-modal-genres">
            ${((s=e.genres)==null?void 0:s.map(r=>`<li>${r}</li>`).join(""))||"No genres"}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${(i=e.albumsList)==null?void 0:i.map(r=>{var t;return`
          <div class="album-modal-card">
            <h4>${r.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${(t=r.tracks)==null?void 0:t.map(a=>`
                  <div class="track-row">
                    <div class="track-name">${a.strTrack}</div>
                    <div class="track-time">${(a.intDuration/6e4).toFixed(2)||""}</div>
                    <div class="track-link">
                      ${a.movie?`
                        <a href="${a.movie}" target="_blank">
                          <svg width="24px" height="24px" class="youtube-modal">
                            <use href="/img/icons.svg#icon-Youtube"></use>
                          </svg>
                        </a>`:""}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `}).join("")}
      </div>
    </div>
  `}const _="/Falcons-2/assets/icons-CM5TBzXO.svg";async function E(e=1,s=8){return(await h.get("/artists",{params:{page:e,limit:s}})).data}function C(e){var s;return`
    <li class="artist-card">
      <img
        class="artist-photo"
        src="${e.strArtistThumb||"https://via.placeholder.com/150"}"
        alt="${e.strArtist}"
      />

      <ul class="artist-genres">
        ${((s=e.genres)==null?void 0:s.map(i=>`<li>${i}</li>`).join(""))||""}
      </ul>

      <h3 class="artist-name">${e.strArtist}</h3>

      <p class="artist-description">
        ${e.strBiographyEN?e.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${e._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use xlink:href="${_}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function S(e,s,i){const r=document.querySelector("[data-artists-grid]"),t=document.querySelector("[data-artists-load]"),a=document.querySelector("[data-artists-loader]");a.hidden=!1,t.hidden=!0,r.insertAdjacentHTML("beforeend",e.artists.map(C).join("")),a.hidden=!0,s*i<e.totalArtists&&(t.hidden=!1),t==null||t.addEventListener("click",async()=>{s++;const c=await E(s);await S(c,s,i),w()})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".artists-section");if(!e)return;const s=e.querySelector(".filters__reset"),i=e.querySelector(".filters__input"),r=[...e.querySelectorAll(".filters__select")],t={search:"",sorting:"Default",genre:"All Genres"};r.forEach(a),document.addEventListener("click",n=>{r.forEach(o=>{o.contains(n.target)||d(o)})});function a(n){const o=n.querySelector(".filters__select-label"),p=[...n.querySelector(".filters__menu").querySelectorAll("[role='option']")];o.addEventListener("click",()=>{const l=!n.classList.contains("is-open");L(),l?c(n):d(n)}),o.addEventListener("keydown",l=>{l.key==="ArrowDown"&&(l.preventDefault(),c(n),p[0].focus()),(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o.click()),l.key==="Escape"&&d(n)}),p.forEach((l,m)=>{l.setAttribute("tabindex","0"),l.addEventListener("click",()=>f(l)),l.addEventListener("keydown",u=>{u.key==="ArrowDown"&&(u.preventDefault(),(p[m+1]||p[0]).focus()),u.key==="ArrowUp"&&(u.preventDefault(),(p[m-1]||p.at(-1)).focus()),(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),f(l)),u.key==="Escape"&&(d(n),o.focus())})});function f(l){p.forEach(g=>g.setAttribute("aria-selected","false")),l.setAttribute("aria-selected","true");const m=l.textContent.trim();o.childNodes.forEach(g=>{g.nodeType===3&&(g.nodeValue=" "+m)}),d(n),v();const u=n.dataset.name||"select";n.dispatchEvent(new CustomEvent("filterchange",{bubbles:!0,detail:{name:u,value:m}}))}}function c(n){var o;n.classList.add("is-open"),(o=n.querySelector(".filters__select-label"))==null||o.setAttribute("aria-expanded","true")}function d(n){var o;n.classList.remove("is-open"),(o=n.querySelector(".filters__select-label"))==null||o.setAttribute("aria-expanded","false")}function L(){r.forEach(d)}function A(){return{search:((i==null?void 0:i.value)||"").trim(),sorting:r[0].querySelector('[aria-selected="true"]').textContent.trim(),genre:r[1].querySelector('[aria-selected="true"]').textContent.trim()}}function v(){const n=A(),o=n.search!==t.search||n.sorting!==t.sorting||n.genre!==t.genre;s.disabled=!o}s.addEventListener("click",()=>{s.disabled||(i&&(i.value=t.search),r.forEach(n=>{const o=n.querySelector("[role='option']");n.querySelectorAll("[role='option']").forEach(f=>f.setAttribute("aria-selected","false")),o&&o.setAttribute("aria-selected","true");const y=n.querySelector(".filters__select-label"),p=n.dataset.name==="sorting"?"Sorting":n.dataset.name==="genre"?"Genre":o==null?void 0:o.textContent.trim();y.childNodes.forEach(f=>{f.nodeType===3&&(f.nodeValue=" "+p)}),d(n)}),e.dispatchEvent(new CustomEvent("filtersreset",{bubbles:!0})),v())}),i==null||i.addEventListener("input",v),v()});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-open")}})();const N=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <symbol id="star-empty" viewBox="0 0 34 32">
            <title>star-empty</title>
            <path class="path-star-empty"
                  d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"/>
        </symbol>
        <symbol id="star-half" viewBox="0 0 34 32">
            <title>star-half</title>
            <path class="path-star-half"
                  d="M 33.412,12.395 21.57,11.374 16.942,0.47 12.314,11.39 0.472,12.395 9.465,20.186 6.764,31.765 16.943,25.621 27.122,31.765 24.437,20.186 33.413,12.395 Z M 16.941,22.541 c 0,0 -0.297971,-14.6455833 0,-15.318 l 2.816,6.654 7.214,0.626 -5.468,4.744 1.647,7.049 z"/>
            </symbol>
        <symbol id="star-filled" viewBox="0 0 34 32">
            <title>star-filled</title>
            <path class="path-star-filled"
                  d="M16.941 25.621l10.179 6.144-2.701-11.579 8.993-7.791-11.842-1.005-4.628-10.92-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579z"/>
        </symbol>
    </defs>
</svg>`;async function B(){return(await h.get("/feedbacks",{params:{limit:10,page:1}})).data}async function T(e){const s=document.querySelector("div.swiper-wrapper"),i=e.map(({name:t,rating:a,descr:c},d)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${O(a)}
                <p class="review">"${c}"</p>
                <p class="review-author-name">${t}</p>
            </div>
        </div>`).join("");s.insertAdjacentHTML("beforeend",i),P(e.length);const r=new $(".swiper",{modules:[k,q],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,a,c){return D()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){b(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>r.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>r.slidePrev()),b(1,e.length)}function P(e){const s=document.querySelector(".swiper-pagination");s.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function D(e,s){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function b(e,s){const i=document.querySelectorAll(".custom-bullet");i.forEach(r=>r.classList.remove("swiper-pagination-bullet-active")),e===1?i[0].classList.add("swiper-pagination-bullet-active"):e===s?i[2].classList.add("swiper-pagination-bullet-active"):i[1].classList.add("swiper-pagination-bullet-active")}function O(e){const s="star-rating-sprite";if(!document.getElementById(s)){const t=document.createElement("div");t.id=s,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.overflow="hidden",t.innerHTML=N,document.body.prepend(t)}const i=Math.round(e),r=Array.from({length:5},(t,a)=>`
            <svg class="star ${a<i?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${i}" aria-label="Rating ${i} out of 5">
        <div class="star-container">${r}</div>
        </div>`}h.defaults.baseURL="https://sound-wave.b.goit.study/api";async function j(){const i=await E(1);console.log(`Artists: ${JSON.stringify(i)}`),await S(i,1,8),w();const r=await B();console.log(`Review: ${JSON.stringify(r)}`),await T(r.data)}j();
//# sourceMappingURL=index.js.map
