import{a as o,S as m,N as p,P as v}from"./assets/vendor-Dat0JyPq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();async function l(){document.querySelectorAll(".learn-more").forEach(i=>{i.addEventListener("click",async()=>{const a=i.dataset.id;try{const s=(await o.get(`/artists/${a}/albums`)).data;console.log(`Artist: ${JSON.stringify(s)}`);const n=document.querySelector(".artist-modal"),c=document.querySelector(".artist-info");c.innerHTML=g(s),console.log(`modal.classList: ${n.classList}`),n.classList.remove("hidden-artist-modal"),console.log(`modal.classList: ${n.classList}`)}catch(t){console.error("Error loading artist info:",t)}})}),document.querySelector(".close").addEventListener("click",()=>{document.querySelector(".artist-modal").classList.add("hidden-artist-modal")})}function g(e){var r,i;return`
    <h2 class="artist-name">${e.strArtist}</h2>
    <div class="det_info">
      <img src="${e.strArtistThumb}" class="artist-img" alt="${e.strArtist}">
      <ul class="artist-details">
        <li>Years active: ${e.intFormedYear||"?"} – ${e.intDiedYear||"present"}</li>
        <li>Sex: ${e.strGender||"?"}</li>
        <li>Members: ${e.intMembers||"?"}</li>
        <li>Country: ${e.strCountry||"?"}</li>
        <li>Biography: ${e.strBiographyEN||"No info"}</li>
        <li>
          Genres:
          <ul class="artist-genres">
            ${((r=e.genres)==null?void 0:r.map(a=>`<li>${a}</li>`).join(""))||"No genres"}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${(i=e.albumsList)==null?void 0:i.map(a=>{var t;return`
          <div class="album-card">
            <h4>${a.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${(t=a.tracks)==null?void 0:t.map(s=>`
                  <div class="track-row">
                    <div class="track-name">${s.strTrack}</div>
                    <div class="track-time">${s.strTime||""}</div>
                    <div class="track-link">
                      ${s.movie?`<a href="${s.movie}" target="_blank">🎬</a>`:""}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `}).join("")}
      </div>
    </div>
  `}async function d(e=1,r=8){return(await o.get("/artists",{params:{page:e,limit:r}})).data}function f(e){var r;return`
    <div class="artist-card">
      <img class="artist-photo" src="${e.strArtistThumb||"https://via.placeholder.com/150"}" alt="${e.strArtist}" />

      <div class="artist-genres">
        ${((r=e.genres)==null?void 0:r.map(i=>`<span>${i}</span>`).join(""))||""}
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
  `}async function u(e,r,i){const a=document.querySelector("[data-artists-grid]"),t=document.querySelector("[data-artists-load]"),s=document.querySelector("[data-artists-loader]");s.hidden=!1,t.hidden=!0,a.insertAdjacentHTML("beforeend",e.artists.map(f).join("")),r*i<e.totalArtists&&(t.hidden=!1),t==null||t.addEventListener("click",async()=>{r++;const n=await d(r);await u(n,r,i),l()})}(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",r),e.closeModalBtn.addEventListener("click",r);function r(){e.modal.classList.toggle("is-open")}})();async function y(){return(await o.get("/feedbacks",{params:{limit:10,page:1}})).data}async function h(e){const r=document.querySelector("div.swiper-wrapper"),i=e.map(({name:t,rating:s,descr:n},c)=>`<div class="swiper-slide">
            <div class="rating" id="rating">
                <div class="stars-container stars-${c}">
                </div>
            </div>
            <p class="review">"${n}"</p>
            <p class="review-author-name">${t}</p>
        </div>`).join("");r.insertAdjacentHTML("beforeend",i),e.forEach((t,s)=>{$(t.rating,s)});const a=new m(".swiper",{modules:[p,v],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.querySelector(".swiper-button-next").addEventListener("click",()=>a.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>a.slidePrev())}function $(e,r){const i=document.querySelector(`div.stars-${r}`),a=Math.round(e),t=5-a;i.innerHTML="";for(let s=0;s<a;s++){const n=document.createElement("div");n.classList.add("star-container"),n.innerHTML=`
            <svg class="star my-star-filled">
                <use href="../img/icons.svg#icon-star"></use>
            </svg>`,i.appendChild(n)}for(let s=0;s<t;s++){const n=document.createElement("div");n.classList.add("star-container"),n.innerHTML=`
            <svg class="star my-star-empty">
                <use href="../img/icons.svg#icon-star"></use>
            </svg>`,i.appendChild(n)}}o.defaults.baseURL="https://sound-wave.b.goit.study/api";async function w(){const i=await d(1);console.log(`Artists: ${JSON.stringify(i)}`),await u(i,1,8),l();const a=await y();console.log(`Review: ${JSON.stringify(a)}`),await h(a.data)}w();
//# sourceMappingURL=index.js.map
