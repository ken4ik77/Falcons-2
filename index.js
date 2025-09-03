import{a as c,S as y,N as b,P as w}from"./assets/vendor-DeWL0fjv.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();async function f(){const e=document.querySelectorAll(".learn-more"),a=document.querySelector("[data-artist-loader]");e.forEach(n=>{n.addEventListener("click",async()=>{a.hidden=!1;const i=n.dataset.id;try{const s=(await c.get(`/artists/${i}/albums`)).data,o=document.querySelector(".artist-modal"),r=document.querySelector(".artist-info");r.innerHTML=$(s),o.classList.remove("hidden-artist-modal"),document.body.classList.toggle("no-scroll")}catch(t){const s=`Error while executing the request: ${t}`;console.error(s),alert(`❌${s}`)}finally{a.hidden=!0}})})}const d=document.querySelector(".artist-modal"),L=document.querySelector(".close-artist-modal");function u(){d.classList.add("hidden-artist-modal"),document.body.classList.remove("no-scroll")}L.addEventListener("click",u);d.addEventListener("click",e=>{e.target===d&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!d.classList.contains("hidden-artist-modal")&&u()});function $(e){var a,n;return`
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
            ${((a=e.genres)==null?void 0:a.map(i=>`<li>${i}</li>`).join(""))||"No genres"}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${(n=e.albumsList)==null?void 0:n.map(i=>{var t;return`
          <div class="album-modal-card">
            <h4>${i.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${(t=i.tracks)==null?void 0:t.map(s=>`
                  <div class="track-row">
                    <div class="track-name">${s.strTrack}</div>
                    <div class="track-time">${(s.intDuration/6e4).toFixed(2)||""}</div>
                    <div class="track-link">
                      ${s.movie?`
                        <a href="${s.movie}" target="_blank">
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
  `}const M="/Falcons-2/assets/icons-CM5TBzXO.svg";async function g(e=1,a=8){return(await c.get("/artists",{params:{page:e,limit:a}})).data}function S(e){var a;return`
    <li class="artist-card">
      <img
        class="artist-photo"
        src="${e.strArtistThumb||"https://via.placeholder.com/150"}"
        alt="${e.strArtist}"
      />

      <ul class="artist-genres">
        ${((a=e.genres)==null?void 0:a.map(n=>`<li>${n}</li>`).join(""))||""}
      </ul>

      <h3 class="artist-name">${e.strArtist}</h3>

      <p class="artist-description">
        ${e.strBiographyEN?e.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${e._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use xlink:href="${M}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function v(e,a,n){const i=document.querySelector("[data-artists-grid]"),t=document.querySelector("[data-artists-load]"),s=document.querySelector("[data-artists-loader]");s.hidden=!1,t.hidden=!0,i.insertAdjacentHTML("beforeend",e.artists.map(S).join("")),s.hidden=!0,a*n<e.totalArtists&&(t.hidden=!1),t==null||t.addEventListener("click",async()=>{a++;const o=await g(a);await v(o,a,n),f()})}(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",a),e.closeModalBtn.addEventListener("click",a);function a(){e.modal.classList.toggle("is-open")}})();const E=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function k(){return(await c.get("/feedbacks",{params:{limit:10,page:1}})).data}async function q(e){const a=document.querySelector("div.swiper-wrapper"),n=e.map(({name:t,rating:s,descr:o},r)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${x(s)}
                <p class="review">"${o}"</p>
                <p class="review-author-name">${t}</p>
            </div>
        </div>`).join("");a.insertAdjacentHTML("beforeend",n),B(e.length);const i=new y(".swiper",{modules:[b,w],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,s,o){return A()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){p(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>i.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>i.slidePrev()),p(1,e.length)}function B(e){const a=document.querySelector(".swiper-pagination");a.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function A(e,a){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function p(e,a){const n=document.querySelectorAll(".custom-bullet");n.forEach(i=>i.classList.remove("swiper-pagination-bullet-active")),e===1?n[0].classList.add("swiper-pagination-bullet-active"):e===a?n[2].classList.add("swiper-pagination-bullet-active"):n[1].classList.add("swiper-pagination-bullet-active")}function x(e){const a="star-rating-sprite";if(!document.getElementById(a)){const t=document.createElement("div");t.id=a,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.overflow="hidden",t.innerHTML=E,document.body.prepend(t)}const n=Math.round(e),i=Array.from({length:5},(t,s)=>`
            <svg class="star ${s<n?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${n}" aria-label="Rating ${n} out of 5">
        <div class="star-container">${i}</div>
        </div>`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",a),e.closeModalBtn.addEventListener("click",a),e.modal.addEventListener("click",s=>{s.target===e.modal&&n()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&n()});function a(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function n(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const i=document.querySelectorAll(".rating .star");let t=0;i.forEach((s,o)=>{s.addEventListener("click",()=>{t=o+1,i.forEach((r,l)=>{r.classList.toggle("active",l<t)})})}),e.form.addEventListener("submit",async s=>{s.preventDefault();const o=e.form.elements.name.value.trim(),r=e.form.elements.message.value.trim(),l=t;if(o.length<2||o.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(l<1||l>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(r.length<10||r.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{if(!(await fetch("-",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,rating:l,descr:r})})).ok)throw new Error("Помилка сервера");n(),e.form.reset(),t=0,i.forEach(h=>h.classList.remove("active")),alert("Дякуємо за відгук!")}catch(m){alert("Не вдалося відправити відгук: "+m.message)}})})();document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};if(e.openModalBtn&&e.closeModalBtn&&e.modal){let a=function(){e.modal.classList.toggle("is-open")};e.openModalBtn.addEventListener("click",a),e.closeModalBtn.addEventListener("click",a)}});c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function N(){const n=document.querySelector("[data-artists-loader]");n.hidden=!1;const i=document.querySelector("[data-feedbacks-loader]");i.hidden=!1;try{const t=await g(1);console.log(`Artists: ${JSON.stringify(t)}`);const s=await k();console.log(`Review: ${JSON.stringify(s)}`),await v(t,1,8),f(),await q(s.data)}catch(t){const s=`Error while executing the request: ${t}`;console.error(s),alert(`❌${s}`)}finally{n.hidden=!0,i.hidden=!0}}N();
//# sourceMappingURL=index.js.map
