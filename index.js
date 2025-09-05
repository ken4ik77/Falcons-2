import{a as m,S as M,N as B,P as A}from"./assets/vendor-DeWL0fjv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();async function w(){const e=document.querySelectorAll(".learn-more"),s=document.querySelector("[data-artist-loader]");e.forEach(n=>{n.addEventListener("click",async()=>{s.hidden=!1;const r=n.dataset.id;try{const a=(await m.get(`/artists/${r}/albums`)).data,i=document.querySelector(".artist-modal"),l=document.querySelector(".artist-info");l.innerHTML=C(a),i.classList.remove("hidden-artist-modal"),document.body.classList.toggle("no-scroll")}catch(t){const a=`Error while executing the request: ${t}`;console.error(a),alert(`❌${a}`)}finally{s.hidden=!0}})})}const g=document.querySelector(".artist-modal"),x=document.querySelector(".close-artist-modal");function v(){g.classList.add("hidden-artist-modal"),document.body.classList.remove("no-scroll")}x.addEventListener("click",v);g.addEventListener("click",e=>{e.target===g&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!g.classList.contains("hidden-artist-modal")&&v()});function C(e){var s,n;return`
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
        ${(n=e.albumsList)==null?void 0:n.map(r=>{var t;return`
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
  `}const P="/Falcons-2/assets/icons-CtQiyP8Q.svg";async function L(e=1,s=8){return(await m.get("/artists",{params:{page:e,limit:s}})).data}function _(e){var s;return`
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
          <use xlink:href="${P}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function S(e,s,n){const r=document.querySelector("[data-artists-grid]"),t=document.querySelector("[data-artists-load]"),a=document.querySelector("[data-artists-loader]");a.hidden=!1,t.hidden=!0,r.insertAdjacentHTML("beforeend",e.artists.map(_).join("")),a.hidden=!0,s*n<e.totalArtists&&(t.hidden=!1),t==null||t.addEventListener("click",async()=>{s++;const i=await L(s);await S(i,s,n),w()})}(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-nav-style")};function s(){e.modal.classList.toggle("is-open")}e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.menuLinks.forEach(n=>{n.addEventListener("click",()=>{e.modal.classList.remove("is-open")})})})();const N=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function T(){return(await m.get("/feedbacks",{params:{limit:10,page:1}})).data}async function R(e){const s=document.querySelector("div.swiper-wrapper"),n=e.map(({name:t,rating:a,descr:i},l)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${I(a)}
                <p class="review">"${i}"</p>
                <p class="review-author-name">${t}</p>
            </div>
        </div>`).join("");s.insertAdjacentHTML("beforeend",n),j(e.length);const r=new M(".swiper",{modules:[B,A],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,a,i){return O()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){b(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>r.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>r.slidePrev()),b(1,e.length)}function j(e){const s=document.querySelector(".swiper-pagination");s.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function O(e,s){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function b(e,s){const n=document.querySelectorAll(".custom-bullet");n.forEach(r=>r.classList.remove("swiper-pagination-bullet-active")),e===1?n[0].classList.add("swiper-pagination-bullet-active"):e===s?n[2].classList.add("swiper-pagination-bullet-active"):n[1].classList.add("swiper-pagination-bullet-active")}function I(e){const s="star-rating-sprite";if(!document.getElementById(s)){const t=document.createElement("div");t.id=s,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.overflow="hidden",t.innerHTML=N,document.body.prepend(t)}const n=Math.round(e),r=Array.from({length:5},(t,a)=>`
            <svg class="star ${a<n?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${n}" aria-label="Rating ${n} out of 5">
        <div class="star-container">${r}</div>
        </div>`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",a=>{a.target===e.modal&&n()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&n()});function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function n(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const r=document.querySelectorAll(".rating-feedback-modal .star");let t=0;r.forEach((a,i)=>{a.addEventListener("click",()=>{t=i+1,r.forEach((l,d)=>{l.classList.toggle("active",d<t)})})}),e.form.addEventListener("submit",async a=>{a.preventDefault();const i=e.form.elements.name.value.trim(),l=e.form.elements.message.value.trim(),d=t;if(i.length<2||i.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(d<1||d>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(l.length<10||l.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{const y=await m.post("/feedbacks",{name:i,rating:d,descr:l});n(),e.form.reset(),t=0,r.forEach(q=>q.classList.remove("active")),alert("Дякуємо за відгук!")}catch(y){alert("Не вдалося відправити відгук: "+y.message)}})})();document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};if(e.openModalBtn&&e.closeModalBtn&&e.modal){let s=function(){e.modal.classList.toggle("is-open")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s)}});let c=[];function D(e){c=Array.isArray(e)?e:(e==null?void 0:e.results)||(e==null?void 0:e.artists)||[]}const H="https://sound-wave.b.goit.study/api/artists";function U({page:e=1,perPage:s=8,search:n="",genre:r="",sort:t=""}={}){const a=new URLSearchParams;return a.set("page",Number(e)||1),a.set("limit",Number(s)||8),n&&n.trim()&&a.set("search",n.trim()),r&&r.trim()&&a.set("genre",r.trim()),t&&t.trim()&&a.set("sort",t.trim()),`${H}?${a.toString()}`}async function p(e={}){const s=U(e);console.log("[artists] GET →",s);const n=await fetch(s);if(!n.ok){const t=await n.text().catch(()=>"");throw new Error(`Bad Request ${n.status}: ${t}`)}const r=await n.json();return D(r),c}const E=document.querySelector("#artist-search"),z=document.querySelector(".filters__search-btn"),u=document.querySelector(".filters__reset"),F=document.querySelector('[data-name="sorting"] .filters__menu'),Y=document.querySelector("[data-genres]"),h=document.querySelector("[data-artists-grid]"),k=document.querySelector("[data-artists-load]");let o={page:1,perPage:8,search:"",genre:"",sort:""};function $(e){const n=document.querySelector("#artist-item-tpl").content.cloneNode(!0);return n.querySelector(".artist-card__img").src=e.image||"/img/no-image.png",n.querySelector(".artist-card__name").textContent=e.name,n.querySelector(".artist-card__genre").textContent=e.genre||"Unknown",n}function f(e){h.innerHTML="",e.forEach(s=>{h.appendChild($(s))}),k.hidden=e.length<o.perPage}function G(e){e.forEach(s=>{h.appendChild($(s))})}z.addEventListener("click",async()=>{o.page=1,o.search=E.value.trim();try{await p(o),f(c),u.disabled=!1}catch(e){console.error(e)}});F.addEventListener("click",async e=>{if(e.target.dataset.value!==void 0){o.sort=e.target.dataset.value,o.page=1;try{await p(o),f(c),u.disabled=!1}catch(s){console.error(s)}}});Y.addEventListener("click",async e=>{if(e.target.dataset.value!==void 0){o.genre=e.target.dataset.value,o.page=1;try{await p(o),f(c),u.disabled=!1}catch(s){console.error(s)}}});k.addEventListener("click",async()=>{o.page+=1;try{await p(o),G(c)}catch(e){console.error(e)}});u.addEventListener("click",async()=>{o={page:1,perPage:8,search:"",genre:"",sort:""},E.value="";try{await p(o),f(c),u.disabled=!0}catch(e){console.error(e)}});m.defaults.baseURL="https://sound-wave.b.goit.study/api";async function Q(){const n=document.querySelector("[data-artists-loader]");n.hidden=!1;const r=document.querySelector("[data-feedbacks-loader]");r.hidden=!1;try{const t=await L(1);console.log(`Artists: ${JSON.stringify(t)}`);const a=await T();console.log(`Review: ${JSON.stringify(a)}`),await S(t,1,8),w(),await R(a.data)}catch(t){const a=`Error while executing the request: ${t}`;console.error(a),alert(`❌${a}`)}finally{n.hidden=!0,r.hidden=!0}}Q();
//# sourceMappingURL=index.js.map
