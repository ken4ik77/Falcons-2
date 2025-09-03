import{a as c,S as v,N as h,P as y}from"./assets/vendor-DeWL0fjv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();async function m(){const e=document.querySelectorAll(".learn-more"),s=document.querySelector("[data-artists-loader]");e.forEach(i=>{i.addEventListener("click",async()=>{s.hidden=!1;const n=i.dataset.id;try{const a=(await c.get(`/artists/${n}/albums`)).data,r=document.querySelector(".artist-modal"),o=document.querySelector(".artist-info");o.innerHTML=w(a),r.classList.remove("hidden-artist-modal")}catch(t){console.error("Error loading artist info:",t)}finally{s.hidden=!0}})})}const b=document.querySelector(".close-artist-modal");b.addEventListener("click",()=>{document.querySelector(".artist-modal").classList.add("hidden-artist-modal")});function w(e){var s,i;return`
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
            ${((s=e.genres)==null?void 0:s.map(n=>`<li>${n}</li>`).join(""))||"No genres"}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${(i=e.albumsList)==null?void 0:i.map(n=>{var t;return`
          <div class="album-modal-card">
            <h4>${n.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${(t=n.tracks)==null?void 0:t.map(a=>`
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
  `}const L="/Falcons-2/assets/icons-CM5TBzXO.svg";async function p(e=1,s=8){return(await c.get("/artists",{params:{page:e,limit:s}})).data}function $(e){var s;return`
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
          <use xlink:href="${L}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function f(e,s,i){const n=document.querySelector("[data-artists-grid]"),t=document.querySelector("[data-artists-load]"),a=document.querySelector("[data-artists-loader]");a.hidden=!1,t.hidden=!0,n.insertAdjacentHTML("beforeend",e.artists.map($).join("")),a.hidden=!0,s*i<e.totalArtists&&(t.hidden=!1),t==null||t.addEventListener("click",async()=>{s++;const r=await p(s);await f(r,s,i),m()})}(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-open")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",a=>{a.target===e.modal&&i()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&i()});function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function i(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const n=document.querySelectorAll(".rating .star");let t=0;n.forEach((a,r)=>{a.addEventListener("click",()=>{t=r+1,n.forEach((o,l)=>{o.classList.toggle("active",l<t)})})}),e.form.addEventListener("submit",async a=>{a.preventDefault();const r=e.form.elements.name.value.trim(),o=e.form.elements.message.value.trim(),l=t;if(r.length<2||r.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(l<1||l>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(o.length<10||o.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{if(!(await fetch("-",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,rating:l,descr:o})})).ok)throw new Error("Помилка сервера");i(),e.form.reset(),t=0,n.forEach(g=>g.classList.remove("active")),alert("Дякуємо за відгук!")}catch(d){alert("Не вдалося відправити відгук: "+d.message)}})})();const S=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function E(){return(await c.get("/feedbacks",{params:{limit:10,page:1}})).data}async function k(e){const s=document.querySelector("div.swiper-wrapper"),i=e.map(({name:t,rating:a,descr:r},o)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${A(a)}
                <p class="review">"${r}"</p>
                <p class="review-author-name">${t}</p>
            </div>
        </div>`).join("");s.insertAdjacentHTML("beforeend",i),M(e.length);const n=new v(".swiper",{modules:[h,y],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,a,r){return q()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){u(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>n.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>n.slidePrev()),u(1,e.length)}function M(e){const s=document.querySelector(".swiper-pagination");s.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function q(e,s){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function u(e,s){const i=document.querySelectorAll(".custom-bullet");i.forEach(n=>n.classList.remove("swiper-pagination-bullet-active")),e===1?i[0].classList.add("swiper-pagination-bullet-active"):e===s?i[2].classList.add("swiper-pagination-bullet-active"):i[1].classList.add("swiper-pagination-bullet-active")}function A(e){const s="star-rating-sprite";if(!document.getElementById(s)){const t=document.createElement("div");t.id=s,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.overflow="hidden",t.innerHTML=S,document.body.prepend(t)}const i=Math.round(e),n=Array.from({length:5},(t,a)=>`
            <svg class="star ${a<i?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${i}" aria-label="Rating ${i} out of 5">
        <div class="star-container">${n}</div>
        </div>`}c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function x(){const i=await p(1);console.log(`Artists: ${JSON.stringify(i)}`),await f(i,1,8),m();const n=await E();console.log(`Review: ${JSON.stringify(n)}`),await k(n.data)}x();
//# sourceMappingURL=index.js.map
