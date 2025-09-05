import{a as h,S as j,N as O,P as H}from"./assets/vendor-DeWL0fjv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();async function M(){const e=document.querySelectorAll(".learn-more"),s=document.querySelector("[data-artist-loader]");e.forEach(t=>{t.addEventListener("click",async()=>{s.hidden=!1;const n=t.dataset.id;try{const a=(await h.get(`/artists/${n}/albums`)).data,i=document.querySelector(".artist-modal"),l=document.querySelector(".artist-info");l.innerHTML=z(a),i.classList.remove("hidden-artist-modal"),document.body.classList.toggle("no-scroll")}catch(r){const a=`Error while executing the request: ${r}`;console.error(a),alert(`❌${a}`)}finally{s.hidden=!0}})})}const w=document.querySelector(".artist-modal"),I=document.querySelector(".close-artist-modal");function k(){w.classList.add("hidden-artist-modal"),document.body.classList.remove("no-scroll")}I.addEventListener("click",k);w.addEventListener("click",e=>{e.target===w&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!w.classList.contains("hidden-artist-modal")&&k()});function z(e){var s,t;return`
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
        ${(t=e.albumsList)==null?void 0:t.map(n=>{var r;return`
          <div class="album-modal-card">
            <h4>${n.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${(r=n.tracks)==null?void 0:r.map(a=>`
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
  `}const D="/Falcons-2/assets/icons-CtQiyP8Q.svg";async function _(e=1,s=8){return(await h.get("/artists",{params:{page:e,limit:s}})).data}function R(e){var s;return`
    <li class="artist-card">
      <img
        class="artist-photo"
        src="${e.strArtistThumb||"https://via.placeholder.com/150"}"
        alt="${e.strArtist}"
      />

      <ul class="artist-genres">
        ${((s=e.genres)==null?void 0:s.map(t=>`<li>${t}</li>`).join(""))||""}
      </ul>

      <h3 class="artist-name">${e.strArtist}</h3>

      <p class="artist-description">
        ${e.strBiographyEN?e.strBiographyEN.slice(0,100)+"...":"No description"}
      </p>

      <button class="learn-more" data-id="${e._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use xlink:href="${D}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
  `}async function B(e,s,t){const n=document.querySelector("[data-artists-grid]"),r=document.querySelector("[data-artists-load]"),a=document.querySelector("[data-artists-loader]");a.hidden=!1,r.hidden=!0,n.insertAdjacentHTML("beforeend",e.artists.map(R).join("")),a.hidden=!0,s*t<e.totalArtists&&(r.hidden=!1),r==null||r.addEventListener("click",async()=>{s++;const i=await _(s);await B(i,s,t),M()})}(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-nav-style")};function s(){e.modal.classList.toggle("is-open")}e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.menuLinks.forEach(t=>{t.addEventListener("click",()=>{e.modal.classList.remove("is-open")})})})();const U=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`;async function F(){return(await h.get("/feedbacks",{params:{limit:10,page:1}})).data}async function Y(e){const s=document.querySelector("div.swiper-wrapper"),t=e.map(({name:r,rating:a,descr:i},l)=>`<div class="swiper-slide">
            <div class="feedback-card">
                ${K(a)}
                <p class="review">"${i}"</p>
                <p class="review-author-name">${r}</p>
            </div>
        </div>`).join("");s.insertAdjacentHTML("beforeend",t),J(e.length);const n=new j(".swiper",{modules:[O,H],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(r,a,i){return Q()}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){q(this.realIndex+1,e.length)}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>n.slideNext()),document.querySelector(".swiper-button-prev").addEventListener("click",()=>n.slidePrev()),q(1,e.length)}function J(e){const s=document.querySelector(".swiper-pagination");s.innerHTML=`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first" aria-label="First slide"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle" aria-label="Middle slides"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last" aria-label="Last slide"></span>`}function Q(e,s){return`
        <span class="swiper-pagination-bullet custom-bullet" data-position="first"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="middle"></span>
        <span class="swiper-pagination-bullet custom-bullet" data-position="last"></span>`}function q(e,s){const t=document.querySelectorAll(".custom-bullet");t.forEach(n=>n.classList.remove("swiper-pagination-bullet-active")),e===1?t[0].classList.add("swiper-pagination-bullet-active"):e===s?t[2].classList.add("swiper-pagination-bullet-active"):t[1].classList.add("swiper-pagination-bullet-active")}function K(e){const s="star-rating-sprite";if(!document.getElementById(s)){const r=document.createElement("div");r.id=s,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.overflow="hidden",r.innerHTML=U,document.body.prepend(r)}const t=Math.round(e),n=Array.from({length:5},(r,a)=>`
            <svg class="star ${a<t?"filled":"empty"}" aria-hidden="true" width="20" height="20">
                <use href="#star-filled"></use>
            </svg>`).join("");return`<div class="rating star-svg value-${t}" aria-label="Rating ${t} out of 5">
        <div class="star-container">${n}</div>
        </div>`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",a=>{a.target===e.modal&&t()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&t()});function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function t(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const n=document.querySelectorAll(".rating-feedback-modal .star");let r=0;n.forEach((a,i)=>{a.addEventListener("click",()=>{r=i+1,n.forEach((l,u)=>{l.classList.toggle("active",u<r)})})}),e.form.addEventListener("submit",async a=>{a.preventDefault();const i=e.form.elements.name.value.trim(),l=e.form.elements.message.value.trim(),u=r;if(i.length<2||i.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(u<1||u>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(l.length<10||l.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{const E=await h.post("/feedbacks",{name:i,rating:u,descr:l});t(),e.form.reset(),r=0,n.forEach(G=>G.classList.remove("active")),alert("Дякуємо за відгук!")}catch(E){alert("Не вдалося відправити відгук: "+E.message)}})})();document.addEventListener("DOMContentLoaded",()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};if(e.openModalBtn&&e.closeModalBtn&&e.modal){let s=function(){e.modal.classList.toggle("is-open")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s)}});const Z="https://sound-wave.b.goit.study/api/artists";let A=[],m=[],o={page:1,perPage:8,search:"",genre:"",sort:""};const C=document.querySelector("#artist-search"),V=document.querySelector(".filters__search-btn"),P=document.querySelector(".filters__reset"),d=document.querySelector('[data-name="sorting"]'),b=d==null?void 0:d.querySelector(".filters__select-label"),p=d==null?void 0:d.querySelector(".filters__menu"),g=document.querySelector('[data-name="genre"]'),L=g==null?void 0:g.querySelector(".filters__select-label"),c=document.querySelector("[data-genres]"),$=document.querySelector("[data-artists-grid]"),N=document.querySelector("[data-artists-load]");function W({page:e=1,perPage:s=8}={}){const t=new URLSearchParams;return t.set("page",Number(e)||1),t.set("limit",Number(s)||8),`${Z}?${t.toString()}`}function X(e={}){const s=e.name||e.title||e.artistName||e.strArtist||"",t=e.image||e.img||e.photo||e.picture||e.avatar||e.strArtistThumb||Array.isArray(e.images)&&e.images[0]||"",n=e.genre||e.genres||e.categories||e.styles||[],a=(Array.isArray(n)?n:typeof n=="string"?[n]:[]).map(l=>String(l).trim()).filter(Boolean),i=a[0]||"";return{...e,name:s,image:t,genres:a,primaryGenre:i}}function f(e){let s=e.map(X);if(o.search){const t=o.search.toLowerCase();s=s.filter(n=>{var r;return(r=n.name)==null?void 0:r.toLowerCase().includes(t)})}if(o.genre){const t=o.genre.toLowerCase();s=s.filter(n=>(n.genres||[]).some(r=>String(r).toLowerCase()===t))}return o.sort==="name_asc"?s.sort((t,n)=>(t.name||"").localeCompare(n.name||"")):o.sort==="name_desc"&&s.sort((t,n)=>(n.name||"").localeCompare(t.name||"")),s}function ee(e){var l,u;const t=document.querySelector("#artist-item-tpl").content.cloneNode(!0),n=t.querySelector(".artist-card__img"),r=t.querySelector(".artist-card__name"),a=t.querySelector(".artist-card__genre"),i="/img/no-image.png";return n.src=e.image&&e.image.trim()?e.image:i,n.alt=e.name||"Unknown Artist",r.textContent=((l=e.name)==null?void 0:l.trim())||"Unknown",a.textContent=e.primaryGenre||((u=e.genres)==null?void 0:u[0])||"Unknown",t}function v(e){$.innerHTML="",e.forEach(s=>$.appendChild(ee(s))),N.hidden=e.length<o.perPage&&o.page===1}function S(e,s){const t=e==null?void 0:e.querySelector(".filters__select-label span");t&&(t.textContent=s)}function x(e){if(!e)return;const s=e.querySelector(".filters__select-label"),t=e.querySelector(".filters__menu");!s||!t||(s.addEventListener("click",()=>{const n=s.getAttribute("aria-expanded")==="true";s.setAttribute("aria-expanded",String(!n)),t.classList.toggle("open",!n)}),document.addEventListener("click",n=>{e.contains(n.target)||(s.setAttribute("aria-expanded","false"),t.classList.remove("open"))}))}async function T(e={}){const s=W(e),t=await fetch(s);if(!t.ok){const r=await t.text().catch(()=>"");throw new Error(`Bad Request ${t.status}: ${r}`)}const n=await t.json();return A=Array.isArray(n)?n:(n==null?void 0:n.results)||(n==null?void 0:n.artists)||[],A}async function te(){try{const s=["All Genres","Rock","Pop","Hip-hop","Jazz","Classical","Electronic","Reggae"].map(t=>`<li role="option" tabindex="0" data-value="${t==="All Genres"?"":t}">${t}</li>`).join("");c.innerHTML=s}catch(e){console.error("Не удалось получить жанры:",e),c.innerHTML='<li role="option" tabindex="0" data-value="">All Genres</li>'}}function y(){P.disabled=!(o.search||o.genre||o.sort)}V.addEventListener("click",()=>{o.page=1,o.search=C.value.trim(),v(f(m)),y()});p==null||p.addEventListener("click",e=>{var t,n;const s=(n=(t=e.target)==null?void 0:t.dataset)==null?void 0:n.value;s!==void 0&&(o.sort=s,o.page=1,S(d,e.target.textContent.trim()),v(f(m)),y(),b.setAttribute("aria-expanded","false"),p.classList.remove("open"))});c==null||c.addEventListener("click",e=>{var t,n;const s=(n=(t=e.target)==null?void 0:t.dataset)==null?void 0:n.value;s!==void 0&&(o.genre=s,o.page=1,S(g,e.target.textContent.trim()),v(f(m)),y(),L.setAttribute("aria-expanded","false"),c.classList.remove("open"))});N.addEventListener("click",async()=>{try{o.page+=1;const e=await T(o);m.push(...e),v(f(m))}catch(e){console.error(e)}});P.addEventListener("click",()=>{o={page:1,perPage:8,search:"",genre:"",sort:""},C.value="",S(d,"Sorting"),S(g,"Genre"),b==null||b.setAttribute("aria-expanded","false"),p==null||p.classList.remove("open"),L==null||L.setAttribute("aria-expanded","false"),c==null||c.classList.remove("open"),v(f(m)),y()});document.addEventListener("DOMContentLoaded",async()=>{try{x(d),x(g),m=[...await T(o)],v(f(m)),await te(),y()}catch(e){console.error(e)}});h.defaults.baseURL="https://sound-wave.b.goit.study/api";async function se(){const t=document.querySelector("[data-artists-loader]");t.hidden=!1;const n=document.querySelector("[data-feedbacks-loader]");n.hidden=!1;try{const r=await _(1);console.log(`Artists: ${JSON.stringify(r)}`);const a=await F();console.log(`Review: ${JSON.stringify(a)}`),await B(r,1,8),M(),await Y(a.data)}catch(r){const a=`Error while executing the request: ${r}`;console.error(a),alert(`❌${a}`)}finally{t.hidden=!0,n.hidden=!0}}se();
//# sourceMappingURL=index.js.map
