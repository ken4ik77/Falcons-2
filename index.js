import{a as b,S as q,N as A,P as $}from"./assets/vendor-DeWL0fjv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();async function L(){const e=document.querySelectorAll(".learn-more"),s=document.querySelector("[data-artists-loader]");e.forEach(n=>{n.addEventListener("click",async()=>{s.hidden=!1;const i=n.dataset.id;try{const a=(await b.get(`/artists/${i}/albums`)).data,l=document.querySelector(".artist-modal"),d=document.querySelector(".artist-info");d.innerHTML=x(a),l.classList.remove("hidden-artist-modal")}catch(t){console.error("Error loading artist info:",t)}finally{s.hidden=!0}})})}const M=document.querySelector(".close-artist-modal");M.addEventListener("click",()=>{document.querySelector(".artist-modal").classList.add("hidden-artist-modal")});function x(e){var s,n;return`
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
            ${((s=e.genres)==null?void 0:s.map(i=>`<li>${i}</li>`).join(""))||"No genres"}
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
                ${(t=i.tracks)==null?void 0:t.map(a=>`
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
  `}const B="/Falcons-2/assets/icons-CM5TBzXO.svg";async function S(e=1,s=8){return(await b.get("/artists",{params:{page:e,limit:s}})).data}function _(e){var s;return`
    <li class="artist-card">
      <img
        class="artist-photo"
        src="${e.strArtistThumb||"https://via.placeholder.com/150"}"
        alt="${e.strArtist}"
      />

      <ul class="artist-genres">
        ${((s=e.genres)==null?void 0:s.map(n=>`<li>${n}</li>`).join(""))||""}
      </ul>

      <h3 class="artist-name">${e.strArtist}</h3>

      <p class="artist-description">
        ${e.strBiographyEN?e.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${e._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use xlink:href="${B}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function k(e,s,n){const i=document.querySelector("[data-artists-grid]"),t=document.querySelector("[data-artists-load]"),a=document.querySelector("[data-artists-loader]");a.hidden=!1,t.hidden=!0,i.insertAdjacentHTML("beforeend",e.artists.map(_).join("")),a.hidden=!0,s*n<e.totalArtists&&(t.hidden=!1),t==null||t.addEventListener("click",async()=>{s++;const l=await S(s);await k(l,s,n),L()})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".artists-section");if(!e)return;const s=e.querySelector(".filters__reset"),n=e.querySelector(".filters__input"),i=[...e.querySelectorAll(".filters__select")],t={search:"",sorting:"Default",genre:"All Genres"};i.forEach(a),document.addEventListener("click",r=>{i.forEach(o=>{o.contains(r.target)||d(o)})});function a(r){const o=r.querySelector(".filters__select-label"),m=[...r.querySelector(".filters__menu").querySelectorAll("[role='option']")];o.addEventListener("click",()=>{const c=!r.classList.contains("is-open");f(),c?l(r):d(r)}),o.addEventListener("keydown",c=>{c.key==="ArrowDown"&&(c.preventDefault(),l(r),m[0].focus()),(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),o.click()),c.key==="Escape"&&d(r)}),m.forEach((c,v)=>{c.setAttribute("tabindex","0"),c.addEventListener("click",()=>p(c)),c.addEventListener("keydown",u=>{u.key==="ArrowDown"&&(u.preventDefault(),(m[v+1]||m[0]).focus()),u.key==="ArrowUp"&&(u.preventDefault(),(m[v-1]||m.at(-1)).focus()),(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),p(c)),u.key==="Escape"&&(d(r),o.focus())})});function p(c){m.forEach(y=>y.setAttribute("aria-selected","false")),c.setAttribute("aria-selected","true");const v=c.textContent.trim();o.childNodes.forEach(y=>{y.nodeType===3&&(y.nodeValue=" "+v)}),d(r),g();const u=r.dataset.name||"select";r.dispatchEvent(new CustomEvent("filterchange",{bubbles:!0,detail:{name:u,value:v}}))}}function l(r){var o;r.classList.add("is-open"),(o=r.querySelector(".filters__select-label"))==null||o.setAttribute("aria-expanded","true")}function d(r){var o;r.classList.remove("is-open"),(o=r.querySelector(".filters__select-label"))==null||o.setAttribute("aria-expanded","false")}function f(){i.forEach(d)}function h(){return{search:((n==null?void 0:n.value)||"").trim(),sorting:i[0].querySelector('[aria-selected="true"]').textContent.trim(),genre:i[1].querySelector('[aria-selected="true"]').textContent.trim()}}function g(){const r=h(),o=r.search!==t.search||r.sorting!==t.sorting||r.genre!==t.genre;s.disabled=!o}s.addEventListener("click",()=>{s.disabled||(n&&(n.value=t.search),i.forEach(r=>{const o=r.querySelector("[role='option']");r.querySelectorAll("[role='option']").forEach(p=>p.setAttribute("aria-selected","false")),o&&o.setAttribute("aria-selected","true");const w=r.querySelector(".filters__select-label"),m=r.dataset.name==="sorting"?"Sorting":r.dataset.name==="genre"?"Genre":o==null?void 0:o.textContent.trim();w.childNodes.forEach(p=>{p.nodeType===3&&(p.nodeValue=" "+m)}),d(r)}),e.dispatchEvent(new CustomEvent("filtersreset",{bubbles:!0})),g())}),n==null||n.addEventListener("input",g),g()});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-open")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-open")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",a=>{a.target===e.modal&&n()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&n()});function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function n(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const i=document.querySelectorAll(".rating .star");let t=0;i.forEach((a,l)=>{a.addEventListener("click",()=>{t=l+1,i.forEach((d,f)=>{d.classList.toggle("active",f<t)})})}),e.form.addEventListener("submit",async a=>{a.preventDefault();const l=e.form.elements.name.value.trim(),d=e.form.elements.message.value.trim(),f=t;if(l.length<2||l.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(f<1||f>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(d.length<10||d.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{if(!(await fetch("-",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l,rating:f,descr:d})})).ok)throw new Error("Помилка сервера");n(),e.form.reset(),t=0,i.forEach(g=>g.classList.remove("active")),alert("Дякуємо за відгук!")}catch(h){alert("Не вдалося відправити відгук: "+h.message)}})})();const C=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function N(){return(await b.get("/feedbacks",{params:{limit:10,page:1}})).data}async function T(e){const s=document.querySelector("div.swiper-wrapper"),n=e.map(({name:t,rating:a,descr:l},d)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${O(a)}
                <p class="review">"${l}"</p>
                <p class="review-author-name">${t}</p>
            </div>
        </div>`).join("");s.insertAdjacentHTML("beforeend",n),P(e.length);const i=new q(".swiper",{modules:[A,$],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,a,l){return D()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){E(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>i.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>i.slidePrev()),E(1,e.length)}function P(e){const s=document.querySelector(".swiper-pagination");s.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function D(e,s){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function E(e,s){const n=document.querySelectorAll(".custom-bullet");n.forEach(i=>i.classList.remove("swiper-pagination-bullet-active")),e===1?n[0].classList.add("swiper-pagination-bullet-active"):e===s?n[2].classList.add("swiper-pagination-bullet-active"):n[1].classList.add("swiper-pagination-bullet-active")}function O(e){const s="star-rating-sprite";if(!document.getElementById(s)){const t=document.createElement("div");t.id=s,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.overflow="hidden",t.innerHTML=C,document.body.prepend(t)}const n=Math.round(e),i=Array.from({length:5},(t,a)=>`
            <svg class="star ${a<n?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${n}" aria-label="Rating ${n} out of 5">
        <div class="star-container">${i}</div>
        </div>`}b.defaults.baseURL="https://sound-wave.b.goit.study/api";async function j(){const n=await S(1);console.log(`Artists: ${JSON.stringify(n)}`),await k(n,1,8),L();const i=await N();console.log(`Review: ${JSON.stringify(i)}`),await T(i.data)}j();
//# sourceMappingURL=index.js.map
