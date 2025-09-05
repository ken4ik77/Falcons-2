import{a as h,S as j,N as I,P as z}from"./assets/vendor-DeWL0fjv.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function C(){const e=document.querySelectorAll(".learn-more"),n=document.querySelector("[data-artist-loader]");e.forEach(r=>{r.addEventListener("click",async()=>{n.hidden=!1;const i=r.dataset.id;try{const s=(await h.get(`/artists/${i}/albums`)).data,l=document.querySelector(".artist-modal"),f=document.querySelector(".artist-info");f.innerHTML=H(s),l.classList.remove("hidden-artist-modal"),document.body.classList.toggle("no-scroll")}catch(t){const s=`Error while executing the request: ${t}`;console.error(s),alert(`❌${s}`)}finally{n.hidden=!0}})})}const w=document.querySelector(".artist-modal"),F=document.querySelector(".close-artist-modal");function q(){w.classList.add("hidden-artist-modal"),document.body.classList.remove("no-scroll")}F.addEventListener("click",q);w.addEventListener("click",e=>{e.target===w&&q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!w.classList.contains("hidden-artist-modal")&&q()});function H(e){var n,r;return`
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
            ${((n=e.genres)==null?void 0:n.map(i=>`<li>${i}</li>`).join(""))||"No genres"}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${(r=e.albumsList)==null?void 0:r.map(i=>{var t;return`
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
  `}const U="/Falcons-2/assets/icons-CtQiyP8Q.svg";async function B(e=1,n=8){return(await h.get("/artists",{params:{page:e,limit:n}})).data}function Y(e){var n;return`
    <li class="artist-card">
      <img
        class="artist-photo"
        src="${e.strArtistThumb||"https://via.placeholder.com/150"}"
        alt="${e.strArtist}"
      />

      <ul class="artist-genres">
        ${((n=e.genres)==null?void 0:n.map(r=>`<li>${r}</li>`).join(""))||""}
      </ul>

      <h3 class="artist-name">${e.strArtist}</h3>

      <p class="artist-description">
        ${e.strBiographyEN?e.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${e._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use xlink:href="${U}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function P(e,n,r){const i=document.querySelector("[data-artists-grid]"),t=document.querySelector("[data-artists-load]"),s=document.querySelector("[data-artists-loader]");s.hidden=!1,t.hidden=!0,i.insertAdjacentHTML("beforeend",e.artists.map(Y).join("")),s.hidden=!0,n*r<e.totalArtists&&(t.hidden=!1),t==null||t.addEventListener("click",async()=>{n++;const l=await B(n);await P(l,n,r),C()})}(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-nav-style")};function n(){e.modal.classList.toggle("is-open")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n),e.menuLinks.forEach(r=>{r.addEventListener("click",()=>{e.modal.classList.remove("is-open")})})})();const G=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function J(){return(await h.get("/feedbacks",{params:{limit:10,page:1}})).data}async function Q(e){const n=document.querySelector("div.swiper-wrapper"),r=e.map(({name:t,rating:s,descr:l},f)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${Z(s)}
                <p class="review">"${l}"</p>
                <p class="review-author-name">${t}</p>
            </div>
        </div>`).join("");n.insertAdjacentHTML("beforeend",r),K(e.length);const i=new j(".swiper",{modules:[I,z],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,s,l){return V()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){M(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>i.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>i.slidePrev()),M(1,e.length)}function K(e){const n=document.querySelector(".swiper-pagination");n.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function V(e,n){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function M(e,n){const r=document.querySelectorAll(".custom-bullet");r.forEach(i=>i.classList.remove("swiper-pagination-bullet-active")),e===1?r[0].classList.add("swiper-pagination-bullet-active"):e===n?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active")}function Z(e){const n="star-rating-sprite";if(!document.getElementById(n)){const t=document.createElement("div");t.id=n,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.overflow="hidden",t.innerHTML=G,document.body.prepend(t)}const r=Math.round(e),i=Array.from({length:5},(t,s)=>`
            <svg class="star ${s<r?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${r}" aria-label="Rating ${r} out of 5">
        <div class="star-container">${i}</div>
        </div>`}const x="",W={genres:()=>`${x}/genres`,artists:e=>`${x}/artists?${new URLSearchParams(e).toString()}`};document.addEventListener("DOMContentLoaded",ee);function X(e,n=document){return n.querySelector(e)}function _(e,n=document){return Array.from(n.querySelectorAll(e))}function ee(){const e=X("#Artists");if(!e)return;const n=e.querySelector(".filters__reset"),r=e.querySelector(".filters__input"),i=e.querySelector(".filters__search-btn"),t=_(".filters__select",e),s=e.querySelector("[data-genres]"),l=e.querySelector("[data-artists-grid]");e.querySelector("[data-artists-loader]");const f=e.querySelector("[data-pagination]");O(),t.forEach(b),document.addEventListener("click",a=>{t.forEach(o=>{o.contains(a.target)||v(o)})}),r.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),y())}),i.addEventListener("click",y);function y(){r.value.trim(),k(),E()}n.addEventListener("click",()=>{n.disabled||(r.value="",t.forEach(a=>L(a)),k(),E())}),k(),E();function b(a){const o=a.querySelector(".filters__select-label"),m=a.querySelector(".filters__menu"),p=()=>Array.from(m.querySelectorAll("[role='option']"));o.addEventListener("click",()=>{const c=!a.classList.contains("is-open");T(),c?N(a):v(a)}),m.addEventListener("keydown",c=>{var g,$;const d=p(),u=d.indexOf(document.activeElement);if(c.key==="ArrowDown"&&(c.preventDefault(),(g=d[u+1]||d[0])==null||g.focus()),c.key==="ArrowUp"&&(c.preventDefault(),($=d[u-1]||d.at(-1))==null||$.focus()),c.key==="Enter"||c.key===" "){c.preventDefault();const S=document.activeElement;(S==null?void 0:S.getAttribute("role"))==="option"&&onChoose(S)}c.key==="Escape"&&(v(a),o.focus())})}function L(a){a.querySelectorAll("[role='option']").forEach(m=>m.setAttribute("aria-selected","false"));const o=a.querySelector(".filters__select-label span");o.textContent=a.dataset.name==="sorting"?"Sorting":"Genre",v(a)}function N(a){var o;a.classList.add("is-open"),(o=a.querySelector(".filters__select-label"))==null||o.setAttribute("aria-expanded","true")}function v(a){var o;a.classList.remove("is-open"),(o=a.querySelector(".filters__select-label"))==null||o.setAttribute("aria-expanded","false")}function T(){_(".filters__select.is-open",e).forEach(v)}function D(){const a=t.find(p=>p.dataset.name==="sorting"),o=t.find(p=>p.dataset.name==="genre"),m=p=>{var c;return((c=p.querySelector("[aria-selected='true']"))==null?void 0:c.textContent.trim())||""};return{search:r.value.trim(),sorting:m(a),genre:m(o)}}function E(){const a=D(),o=a.search!==""||a.sorting!==""||a.genre!=="";n.disabled=!o}async function O(){try{const o=await(await fetch(W.genres())).json(),p=(Array.isArray(o)?o:(o==null?void 0:o.items)||[]).map(u=>typeof u=="string"?{id:u,name:u}:u),c=document.createDocumentFragment(),d=document.createElement("li");d.role="option",d.tabIndex=0,d.dataset.value="",d.setAttribute("aria-selected","false"),d.textContent="(не обрано)",c.appendChild(d);for(const u of p){const g=document.createElement("li");g.role="option",g.tabIndex=0,g.dataset.value=u.id??u.name,g.setAttribute("aria-selected","false"),g.textContent=u.name??String(u),c.appendChild(g)}s.innerHTML="",s.appendChild(c)}catch(a){console.error("Failed to load genres",a),s.innerHTML=`
<li role="option" tabindex="0" data-value="" aria-selected="false">(не обрано)</li>
<li role="option" tabindex="0" data-value="rock" aria-selected="false">Rock</li>
<li role="option" tabindex="0" data-value="pop" aria-selected="false">Pop</li>
<li role="option" tabindex="0" data-value="jazz" aria-selected="false">Jazz</li>`}}async function k(){empty.className="empty",empty.textContent="За вашим запитом нічого не знайдено.",l.appendChild(empty),f.hidden=!0}const R=document.getElementById("artist-item-tpl"),A=document.createDocumentFragment();for(const a of items){const o=R.content.firstElementChild.cloneNode(!0),m=o.querySelector(".artist-card__img"),p=o.querySelector(".artist-card__name"),c=o.querySelector(".artist-card__genre");m.src=a.photo||a.image||"https://picsum.photos/600/400",m.alt=`Portrait of ${a.name||"artist"}`,p.textContent=a.name||"Unknown Artist";const d=a.genres||a.genre||[];c.textContent=Array.isArray(d)?d.join(", "):String(d||""),A.appendChild(o)}l.appendChild(A)}(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n),e.modal.addEventListener("click",s=>{s.target===e.modal&&r()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&r()});function n(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function r(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const i=document.querySelectorAll(".rating-feedback-modal .star");let t=0;i.forEach((s,l)=>{s.addEventListener("click",()=>{t=l+1,i.forEach((f,y)=>{f.classList.toggle("active",y<t)})})}),e.form.addEventListener("submit",async s=>{s.preventDefault();const l=e.form.elements.name.value.trim(),f=e.form.elements.message.value.trim(),y=t;if(l.length<2||l.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(y<1||y>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(f.length<10||f.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{const b=await h.post("/feedbacks",{name:l,rating:y,descr:f});r(),e.form.reset(),t=0,i.forEach(L=>L.classList.remove("active")),alert("Дякуємо за відгук!")}catch(b){alert("Не вдалося відправити відгук: "+b.message)}})})();document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};if(e.openModalBtn&&e.closeModalBtn&&e.modal){let n=function(){e.modal.classList.toggle("is-open")};e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}});h.defaults.baseURL="https://sound-wave.b.goit.study/api";async function te(){const r=document.querySelector("[data-artists-loader]");r.hidden=!1;const i=document.querySelector("[data-feedbacks-loader]");i.hidden=!1;try{const t=await B(1);console.log(`Artists: ${JSON.stringify(t)}`);const s=await J();console.log(`Review: ${JSON.stringify(s)}`),await P(t,1,8),C(),await Q(s.data)}catch(t){const s=`Error while executing the request: ${t}`;console.error(s),alert(`❌${s}`)}finally{r.hidden=!0,i.hidden=!0}}te();
//# sourceMappingURL=index.js.map
