import{a as o,S as m,N as g,P as v}from"./assets/vendor-DeWL0fjv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();async function d(){document.querySelectorAll(".learn-more").forEach(i=>{i.addEventListener("click",async()=>{const n=i.dataset.id;try{const a=(await o.get(`/artists/${n}/albums`)).data,r=document.querySelector(".artist-modal"),l=document.querySelector(".artist-info");l.innerHTML=f(a),r.classList.remove("hidden-artist-modal")}catch(e){console.error("Error loading artist info:",e)}})}),document.querySelector(".close-artist-modal").addEventListener("click",()=>{document.querySelector(".artist-modal").classList.add("hidden-artist-modal")})}function f(t){var s,i;return`
    <h2 class="artist-name">${t.strArtist}</h2>
    <div class="det_info">
      <img src="${t.strArtistThumb}" class="artist-img" alt="${t.strArtist}">
      <ul class="artist-details">
        <li>Years active<br>
        ${t.intFormedYear||"?"} – ${t.intDiedYear||"present"}</li>
        <li>Sex<br>
        ${t.strGender||"?"}</li>
        <li>Members<br>
        ${t.intMembers||"?"}</li>
        <li>Country<br>
        ${t.strCountry||"?"}</li>
        <li>Biography<br>
        ${t.strBiographyEN||"No info"}</li>
        <li>
          <ul class="artist-modal-genres">
            ${((s=t.genres)==null?void 0:s.map(n=>`<li>${n}</li>`).join(""))||"No genres"}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${(i=t.albumsList)==null?void 0:i.map(n=>{var e;return`
          <div class="album-modal-card">
            <h4>${n.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${(e=n.tracks)==null?void 0:e.map(a=>`
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
  `}async function u(t=1,s=8){return(await o.get("/artists",{params:{page:t,limit:s}})).data}function h(t){var s;return`
    <li class="artist-card">
      <img 
        class="artist-photo" 
        src="${t.strArtistThumb||"https://via.placeholder.com/150"}" 
        alt="${t.strArtist}" 
      />

      <ul class="artist-genres">
        ${((s=t.genres)==null?void 0:s.map(i=>`<li>${i}</li>`).join(""))||""}
      </ul>

      <h3 class="artist-name">${t.strArtist}</h3>

      <p class="artist-description">
        ${t.strBiographyEN?t.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${t._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use href="./img/icons.svg#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function p(t,s,i){const n=document.querySelector("[data-artists-grid]"),e=document.querySelector("[data-artists-load]"),a=document.querySelector("[data-artists-loader]");a.hidden=!1,e.hidden=!0,n.insertAdjacentHTML("beforeend",t.artists.map(h).join("")),a.hidden=!0,s*i<t.totalArtists&&(e.hidden=!1),e==null||e.addEventListener("click",async()=>{s++;const r=await u(s);await p(r,s,i),d()})}(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};t.openModalBtn.addEventListener("click",s),t.closeModalBtn.addEventListener("click",s);function s(){t.modal.classList.toggle("is-open")}})();const y=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function b(){return(await o.get("/feedbacks",{params:{limit:10,page:1}})).data}async function w(t){const s=document.querySelector("div.swiper-wrapper"),i=t.map(({name:e,rating:a,descr:r},l)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${S(a)}
                <p class="review">"${r}"</p>
                <p class="review-author-name">${e}</p>
            </div>
        </div>`).join("");s.insertAdjacentHTML("beforeend",i),$(t.length);const n=new m(".swiper",{modules:[g,v],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(e,a,r){return L()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){c(this.realIndex+1,t.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>n.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>n.slidePrev()),c(1,t.length)}function $(t){const s=document.querySelector(".swiper-pagination");s.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function L(t,s){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function c(t,s){const i=document.querySelectorAll(".custom-bullet");i.forEach(n=>n.classList.remove("swiper-pagination-bullet-active")),t===1?i[0].classList.add("swiper-pagination-bullet-active"):t===s?i[2].classList.add("swiper-pagination-bullet-active"):i[1].classList.add("swiper-pagination-bullet-active")}function S(t){const s="star-rating-sprite";if(!document.getElementById(s)){const e=document.createElement("div");e.id=s,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.overflow="hidden",e.innerHTML=y,document.body.prepend(e)}const i=Math.round(t),n=Array.from({length:5},(e,a)=>`
            <svg class="star ${a<i?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${i}" aria-label="Rating ${i} out of 5">
        <div class="star-container">${n}</div>
        </div>`}o.defaults.baseURL="https://sound-wave.b.goit.study/api";async function M(){const i=await u(1);console.log(`Artists: ${JSON.stringify(i)}`),await p(i,1,8),d();const n=await b();console.log(`Review: ${JSON.stringify(n)}`),await w(n.data)}M();
//# sourceMappingURL=index.js.map
