import{a as L}from"./assets/vendor-BkCUij8E.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const v="https://sound-wave.b.goit.study/api",f=8,p=L.create({baseURL:v,timeout:1e4,headers:{"Content-Type":"application/json"}});async function E(e=1,r=f){return(await p.get("/artists",{params:{page:e,limit:r}})).data}function b(e){var r;return`
    <div class="artist-card">
      <img class="artist-photo" src="${e.strArtistThumb||"https://via.placeholder.com/150"}" alt="${e.strArtist}" />

      <div class="artist-genres">
        ${((r=e.genres)==null?void 0:r.map(o=>`<span>${o}</span>`).join(""))||""}
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
  `}const g=document.querySelector("[data-artists-grid]"),d=document.querySelector("[data-artists-load]"),m=document.querySelector("[data-artists-loader]");let l=1;async function h(e=1){m.hidden=!1,d.hidden=!0;try{const r=await E(e);console.log("API response:",r),g.insertAdjacentHTML("beforeend",r.artists.map(b).join("")),e*f<r.totalArtists&&(d.hidden=!1)}catch(r){console.error("Помилка завантаження артистів:",r)}finally{m.hidden=!0}}d==null||d.addEventListener("click",async()=>{l++,await h(l)});document.addEventListener("DOMContentLoaded",()=>{h(l)});g.addEventListener("click",async e=>{if(e.target.matches(".learn-more")){const r=e.target.dataset.id;try{const n=(await p.get(`/artists/${r}`)).data,t=document.querySelector("[data-modal-content]");t.innerHTML=`
        <img src="${n.photo}" alt="${n.name}"/>
        <h2>${n.name}</h2>
        <p>${n.description}</p>
      `,document.querySelector("[data-modal]").classList.add("is-open")}catch(o){console.error("Не вдалося завантажити артиста:",o)}}});(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",r),e.closeModalBtn.addEventListener("click",r),e.modal.addEventListener("click",s=>{s.target===e.modal&&o()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&o()});function r(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function o(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const n=document.querySelectorAll(".rating .star");let t=0;n.forEach((s,a)=>{s.addEventListener("click",()=>{t=a+1,n.forEach((c,i)=>{c.classList.toggle("active",i<t)})})}),e.form.addEventListener("submit",async s=>{s.preventDefault();const a=e.form.elements.name.value.trim(),c=e.form.elements.message.value.trim(),i=t;if(a.length<2||a.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(i<1||i>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(c.length<10||c.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{if(!(await fetch("-",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,rating:i,descr:c})})).ok)throw new Error("Помилка сервера");o(),e.form.reset(),t=0,n.forEach(y=>y.classList.remove("active")),alert("Дякуємо за відгук!")}catch(u){alert("Не вдалося відправити відгук: "+u.message)}})})();
//# sourceMappingURL=index.js.map
