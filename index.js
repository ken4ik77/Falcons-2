import{a as m,S as M,N as B,P as A}from"./assets/vendor-DeWL0fjv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();async function w(){const e=document.querySelectorAll(".learn-more"),t=document.querySelector("[data-artist-loader]");e.forEach(a=>{a.addEventListener("click",async()=>{t.hidden=!1;const r=a.dataset.id;try{const n=(await m.get(`/artists/${r}/albums`)).data,i=document.querySelector(".artist-modal"),l=document.querySelector(".artist-info");l.innerHTML=C(n),i.classList.remove("hidden-artist-modal"),document.body.classList.toggle("no-scroll")}catch(s){const n=`Error while executing the request: ${s}`;console.error(n),alert(`❌${n}`)}finally{t.hidden=!0}})})}const g=document.querySelector(".artist-modal"),x=document.querySelector(".close-artist-modal");function v(){g.classList.add("hidden-artist-modal"),document.body.classList.remove("no-scroll")}x.addEventListener("click",v);g.addEventListener("click",e=>{e.target===g&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!g.classList.contains("hidden-artist-modal")&&v()});function C(e){var t,a;return`
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
            ${((t=e.genres)==null?void 0:t.map(r=>`<li>${r}</li>`).join(""))||"No genres"}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${(a=e.albumsList)==null?void 0:a.map(r=>{var s;return`
          <div class="album-modal-card">
            <h4>${r.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${(s=r.tracks)==null?void 0:s.map(n=>`
                  <div class="track-row">
                    <div class="track-name">${n.strTrack}</div>
                    <div class="track-time">${(n.intDuration/6e4).toFixed(2)||""}</div>
                    <div class="track-link">
                      ${n.movie?`
                        <a href="${n.movie}" target="_blank">
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
  `}const P="/Falcons-2/assets/icons-CtQiyP8Q.svg";async function L(e=1,t=8){return(await m.get("/artists",{params:{page:e,limit:t}})).data}function _(e){var t;return`
    <li class="artist-card">
      <img
        class="artist-photo"
        src="${e.strArtistThumb||"https://via.placeholder.com/150"}"
        alt="${e.strArtist}"
      />

      <ul class="artist-genres">
        ${((t=e.genres)==null?void 0:t.map(a=>`<li>${a}</li>`).join(""))||""}
      </ul>

      <h3 class="artist-name">${e.strArtist}</h3>

      <p class="artist-description">
        ${e.strBiographyEN?e.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${e._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use xlink:href="${P}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function S(e,t,a){const r=document.querySelector("[data-artists-grid]"),s=document.querySelector("[data-artists-load]"),n=document.querySelector("[data-artists-loader]");n.hidden=!1,s.hidden=!0,r.insertAdjacentHTML("beforeend",e.artists.map(_).join("")),n.hidden=!0,t*a<e.totalArtists&&(s.hidden=!1),s==null||s.addEventListener("click",async()=>{t++;const i=await L(t);await S(i,t,a),w()})}(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-nav-style")};function t(){e.modal.classList.toggle("is-open")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(a=>{a.addEventListener("click",()=>{e.modal.classList.remove("is-open")})})})();const N=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function T(){return(await m.get("/feedbacks",{params:{limit:10,page:1}})).data}async function R(e){const t=document.querySelector("div.swiper-wrapper"),a=e.map(({name:s,rating:n,descr:i},l)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${I(n)}
                <p class="review">"${i}"</p>
                <p class="review-author-name">${s}</p>
            </div>
        </div>`).join("");t.insertAdjacentHTML("beforeend",a),j(e.length);const r=new M(".swiper",{modules:[B,A],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(s,n,i){return O()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){b(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>r.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>r.slidePrev()),b(1,e.length)}function j(e){const t=document.querySelector(".swiper-pagination");t.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function O(e,t){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function b(e,t){const a=document.querySelectorAll(".custom-bullet");a.forEach(r=>r.classList.remove("swiper-pagination-bullet-active")),e===1?a[0].classList.add("swiper-pagination-bullet-active"):e===t?a[2].classList.add("swiper-pagination-bullet-active"):a[1].classList.add("swiper-pagination-bullet-active")}function I(e){const t="star-rating-sprite";if(!document.getElementById(t)){const s=document.createElement("div");s.id=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.innerHTML=N,document.body.prepend(s)}const a=Math.round(e),r=Array.from({length:5},(s,n)=>`
            <svg class="star ${n<a?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${a}" aria-label="Rating ${a} out of 5">
        <div class="star-container">${r}</div>
        </div>`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",n=>{n.target===e.modal&&a()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&a()});function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function a(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const r=document.querySelectorAll(".rating-feedback-modal .star");let s=0;r.forEach((n,i)=>{n.addEventListener("click",()=>{s=i+1,r.forEach((l,d)=>{l.classList.toggle("active",d<s)})})}),e.form.addEventListener("submit",async n=>{n.preventDefault();const i=e.form.elements.name.value.trim(),l=e.form.elements.message.value.trim(),d=s;if(i.length<2||i.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(d<1||d>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(l.length<10||l.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{const y=await m.post("/feedbacks",{name:i,rating:d,descr:l});a(),e.form.reset(),s=0,r.forEach(q=>q.classList.remove("active")),alert("Дякуємо за відгук!")}catch(y){alert("Не вдалося відправити відгук: "+y.message)}})})();document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};if(e.openModalBtn&&e.closeModalBtn&&e.modal){let t=function(){e.modal.classList.toggle("is-open")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}});let c=[];function D(e){c=Array.isArray(e)?e:(e==null?void 0:e.results)||(e==null?void 0:e.artists)||[]}const H="https://sound-wave.b.goit.study/api/artists";function U({page:e=1,perPage:t=8}={}){const a=new URLSearchParams;return a.set("page",Number(e)||1),a.set("limit",Number(t)||8),`${H}?${a.toString()}`}async function p(e={}){const t=U(e);console.log("[artists] GET →",t);const a=await fetch(t);if(!a.ok){const s=await a.text().catch(()=>"");throw new Error(`Bad Request ${a.status}: ${s}`)}const r=await a.json();return D(r),c}const E=document.querySelector("#artist-search"),z=document.querySelector(".filters__search-btn"),u=document.querySelector(".filters__reset"),F=document.querySelector('[data-name="sorting"] .filters__menu'),Y=document.querySelector("[data-genres]"),h=document.querySelector("[data-artists-grid]"),k=document.querySelector("[data-artists-load]");let o={page:1,perPage:8,search:"",genre:"",sort:""};function $(e){const a=document.querySelector("#artist-item-tpl").content.cloneNode(!0);return a.querySelector(".artist-card__img").src=e.image||"/img/no-image.png",a.querySelector(".artist-card__name").textContent=e.name,a.querySelector(".artist-card__genre").textContent=e.genre||"Unknown",a}function f(e){h.innerHTML="",e.forEach(t=>{h.appendChild($(t))}),k.hidden=e.length<o.perPage}function G(e){e.forEach(t=>{h.appendChild($(t))})}z.addEventListener("click",async()=>{o.page=1,o.search=E.value.trim();try{await p(o),f(c),u.disabled=!1}catch(e){console.error(e)}});F.addEventListener("click",async e=>{if(e.target.dataset.value!==void 0){o.sort=e.target.dataset.value,o.page=1;try{await p(o),f(c),u.disabled=!1}catch(t){console.error(t)}}});Y.addEventListener("click",async e=>{if(e.target.dataset.value!==void 0){o.genre=e.target.dataset.value,o.page=1;try{await p(o),f(c),u.disabled=!1}catch(t){console.error(t)}}});k.addEventListener("click",async()=>{o.page+=1;try{await p(o),G(c)}catch(e){console.error(e)}});u.addEventListener("click",async()=>{o={page:1,perPage:8,search:"",genre:"",sort:""},E.value="";try{await p(o),f(c),u.disabled=!0}catch(e){console.error(e)}});m.defaults.baseURL="https://sound-wave.b.goit.study/api";async function Q(){const a=document.querySelector("[data-artists-loader]");a.hidden=!1;const r=document.querySelector("[data-feedbacks-loader]");r.hidden=!1;try{const s=await L(1);console.log(`Artists: ${JSON.stringify(s)}`);const n=await T();console.log(`Review: ${JSON.stringify(n)}`),await S(s,1,8),w(),await R(n.data)}catch(s){const n=`Error while executing the request: ${s}`;console.error(n),alert(`❌${n}`)}finally{a.hidden=!0,r.hidden=!0}}Q();
//# sourceMappingURL=index.js.map
