import{a as L}from"./assets/vendor-BkCUij8E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const v="https://sound-wave.b.goit.study/api",f=8,p=L.create({baseURL:v,timeout:1e4,headers:{"Content-Type":"application/json"}});async function E(e=1,t=f){return(await p.get("/artists",{params:{page:e,limit:t}})).data}function M(e){var t;return`
    <div class="artist-card">
      <img class="artist-photo" src="${e.strArtistThumb||"https://via.placeholder.com/150"}" alt="${e.strArtist}" />

      <div class="artist-genres">
        ${((t=e.genres)==null?void 0:t.map(s=>`<span>${s}</span>`).join(""))||""}
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
  `}const g=document.querySelector("[data-artists-grid]"),i=document.querySelector("[data-artists-load]"),m=document.querySelector("[data-artists-loader]");let l=1;async function h(e=1){m.hidden=!1,i.hidden=!0;try{const t=await E(e);console.log("API response:",t),g.insertAdjacentHTML("beforeend",t.artists.map(M).join("")),e*f<t.totalArtists&&(i.hidden=!1)}catch(t){console.error("Помилка завантаження артистів:",t)}finally{m.hidden=!0}}i==null||i.addEventListener("click",async()=>{l++,await h(l)});document.addEventListener("DOMContentLoaded",()=>{h(l)});g.addEventListener("click",async e=>{if(e.target.matches(".learn-more")){const t=e.target.dataset.id;try{const n=(await p.get(`/artists/${t}`)).data,o=document.querySelector("[data-modal-content]");o.innerHTML=`
        <img src="${n.photo}" alt="${n.name}"/>
        <h2>${n.name}</h2>
        <p>${n.description}</p>
      `,document.querySelector("[data-modal]").classList.add("is-open")}catch(s){console.error("Не вдалося завантажити артиста:",s)}}});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-feedback-open]"),closeModalBtn:document.querySelector("[data-modal-feedback-close]"),modal:document.querySelector("[data-modal-feedback]"),form:document.querySelector(".feedback-form")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",r=>{r.target===e.modal&&s()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&s()});function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function s(){e.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const n=document.querySelectorAll(".rating .star");let o=0;n.forEach((r,a)=>{r.addEventListener("click",()=>{o=a+1,n.forEach((c,d)=>{c.classList.toggle("active",d<o)})})}),e.form.addEventListener("submit",async r=>{r.preventDefault();const a=e.form.elements.name.value.trim(),c=e.form.elements.message.value.trim(),d=o;if(a.length<2||a.length>16){alert("Ім’я має бути від 2 до 16 символів.");return}if(d<1||d>5){alert("Оберіть рейтинг від 1 до 5 зірок.");return}if(c.length<10||c.length>512){alert("Повідомлення має бути від 10 до 512 символів.");return}try{if(!(await fetch("-",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,rating:d,descr:c})})).ok)throw new Error("Помилка сервера");s(),e.form.reset(),o=0,n.forEach(y=>y.classList.remove("active")),alert("Дякуємо за відгук!")}catch(u){alert("Не вдалося відправити відгук: "+u.message)}})})();
//# sourceMappingURL=index.js.map
