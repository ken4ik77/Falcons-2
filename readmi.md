додаткове завданняхтмл

<!---*****************************************************************--->
<!-- <section class="artists-section" aria-labelledby="artists-heading">
  <div class="container">
    <div class="artists-layout">
      <!-- ===================== FILTERS ===================== -->
<!-- <aside class="filters" aria-label="Filters">
        <div class="filters__head">
          <h2 class="filters__title" id="filters-title">Filters</h2>
          <button
            type="button"
            class="filters__reset"
            aria-label="Reset all filters"
            disabled
          >
            Reset
          </button>
        </div> -->

<!-- Search -->
<!-- <label class="filters__field" for="artist-search">
          <span class="filters__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21l-4.2-4.2M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </label>
        <input
          id="artist-search"
          class="filters__input"
          type="search"
          name="q"
          placeholder="Search"
          aria-label="Search artists"
        /> -->

<!-- Sorting -->
<!-- <div class="filters__select" data-name="sorting">
          <button
            type="button"
            class="filters__select-label"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-label="Sorting options"
          >
            Sorting
            <svg
              class="filters__chevron"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M7 10l5 5 5-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <ul class="filters__menu" role="listbox" aria-label="Sorting options">
            <li role="option" tabindex="0" aria-selected="true">Default</li>
            <li role="option" tabindex="0">A-Z</li>
            <li role="option" tabindex="0">Z-A</li>
          </ul>
        </div> -->

<!-- Genre -->
<!-- <div class="filters__select" data-name="genre">
          <button
            type="button"
            class="filters__select-label"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-label="Select genre"
          >
            Genre
            <svg
              class="filters__chevron"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M7 10l5 5 5-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <ul class="filters__menu" role="listbox" aria-label="Select genre">
            <li role="option" tabindex="0" aria-selected="true">All Genres</li>
            <li role="option" tabindex="0">Rock</li>
            <li role="option" tabindex="0">Pop</li>
            <li role="option" tabindex="0">Hip-hop</li>
            <li role="option" tabindex="0">Jazz</li>
            <li role="option" tabindex="0">Classical</li>
            <li role="option" tabindex="0">Electronic</li>
            <li role="option" tabindex="0">Reggae</li>
          </ul>
        </div>
      </aside> -->
<!-- =================== /FILTERS ===================== -->

<!-- ===================== CONTENT ===================== -->
<!-- <div class="artists-content">
        <header class="artists-header">
          <h2 id="artists-heading" class="artists-title">
            Explore Your New Favorite Artists
          </h2>
        </header> -->

<!-- Грід карток -->
<!-- <ul class="artists-grid">
          <li class="artist-card">
            <a
              href="#"
              class="artist-card__link"
              aria-label="Open profile of Walter Under"
            >
              <img
                src="./img/placeholder-1.jpg"
                alt="Portrait of Walter Under"
                class="artist-card__img"
                loading="lazy"
              />
              <div class="artist-card__body">
                <h3 class="artist-card__name">Walter Under</h3>
                <p class="artist-card__genre">Rock</p>
              </div>
            </a>
          </li>
          <li class="artist-card">
            <a
              href="#"
              class="artist-card__link"
              aria-label="Open profile of Lily Groan"
            >
              <img
                src="./img/placeholder-2.jpg"
                alt="Portrait of Lily Groan"
                class="artist-card__img"
                loading="lazy"
              />
              <div class="artist-card__body">
                <h3 class="artist-card__name">Lily Groan</h3>
                <p class="artist-card__genre">Jazz</p>
              </div>
            </a>
          </li>
        </ul>
      </div> -->
<!-- =================== /CONTENT ===================== -->
<!-- </div>
  </div>
</section>

<!---*****************************************************************--->

сss

/_ ##################################################################### _/ /_
==== Filters (Figma) ==== _/ /\* .filters { width: 304px; display: flex;
flex-direction: column; gap: 12px; color: #fff; } @media (max-width: 960px) {
.filters { width: 100%; } }

.filters**head { display: flex; align-items: center; justify-content:
space-between; } .filters**title { margin: 0; font: 700 18px/1.5 'IBM Plex
Sans', Roboto, system-ui; color: #fff; }

.filters**reset { appearance: none; background: none; border: none; padding: 0;
font: 500 18px/1.5 'IBM Plex Sans', Roboto, system-ui; color: #fff;
text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
.filters**reset[disabled] { opacity: 0.4; cursor: not-allowed; }

.filters**field { display: flex; align-items: center; gap: 12px; height: 48px;
width: 100%; padding: 8px 12px; border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 12px; background: transparent; } .filters**icon { color: #fff; }
.filters**input { flex: 1; background: transparent; border: none; outline: none;
color: #fff; font: 400 18px/1.5 'IBM Plex Sans', Roboto, system-ui; }
.filters**input::placeholder { color: rgba(255, 255, 255, 0.6); }

/_ Selects _/ /\* .filters**select { position: relative; width: 100%; }
.filters**select-label { width: 100%; height: 43px; padding: 8px 12px; display:
flex; align-items: center; justify-content: space-between; gap: 16px; border:
1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; background:
transparent; color: #fff; cursor: pointer; font: 400 18px/1.5 'IBM Plex Sans',
Roboto, system-ui; } .filters**chevron { transition: transform 0.2s ease; }
.filters**select.is-open .filters\_\_chevron { transform: rotate(180deg); }

.filters**menu { display: none; list-style: none; margin: 16px 0 0; padding:
24px 24px 16px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px;
background: #0b0c10; max-height: 260px; overflow: auto; }
.filters**select.is-open .filters\_\_menu { display: block; }

.filters**menu::-webkit-scrollbar { width: 8px; }
.filters**menu::-webkit-scrollbar-thumb { background: rgba(155, 135, 245, 0.8);
border-radius: 8px; }

.filters**menu li { padding: 0 0 16px 0; color: #fff; font: 400 18px/1.5 'IBM
Plex Sans', Roboto, system-ui; cursor: pointer; } .filters**menu li:last-child {
padding-bottom: 0; } .filters**menu li[aria-selected='true'] { font-weight: 500;
} .filters**menu li:focus-visible { outline: 2px solid rgba(155, 135, 245, 0.6);
border-radius: 6px; } _/ _/

/_ ####################################################################### _/

js.

/_ #################################################################### _/

// document.addEventListener('DOMContentLoaded', () => { // const section =
document.querySelector('.artists-section'); // if (!section) return;

// const btnReset = section.querySelector('.filters**reset'); // const
inputSearch = section.querySelector('.filters**input'); // const selects =
[...section.querySelectorAll('.filters__select')];

// const defaults = { search: '', sorting: 'Default', genre: 'All Genres' };

// // ====== ініт селектів ====== // selects.forEach(initSelect);

// // закривати всі селекти при кліку назовні //
document.addEventListener('click', e => { // selects.forEach(sel => { // if
(!sel.contains(e.target)) closeSelect(sel); // }); // });

// function initSelect(sel) { // const btn =
sel.querySelector('.filters**select-label'); // const menu =
sel.querySelector('.filters**menu'); // const opts =
[...menu.querySelectorAll("[role='option']")];

// btn.addEventListener('click', () => { // const open =
!sel.classList.contains('is-open'); // closeAll(); // if (open) openSelect(sel);
// else closeSelect(sel); // });

// // клавіатура на кнопці // btn.addEventListener('keydown', e => { // if
(e.key === 'ArrowDown') { // e.preventDefault(); // openSelect(sel); //
opts[0].focus(); // } // if (e.key === 'Enter' || e.key === ' ') { //
e.preventDefault(); // btn.click(); // } // if (e.key === 'Escape')
closeSelect(sel); // });

// // опції // opts.forEach((opt, i) => { // opt.setAttribute('tabindex', '0');

// opt.addEventListener('click', () => choose(opt)); //
opt.addEventListener('keydown', e => { // if (e.key === 'ArrowDown') { //
e.preventDefault(); // (opts[i + 1] || opts[0]).focus(); // } // if (e.key ===
'ArrowUp') { // e.preventDefault(); // (opts[i - 1] || opts.at(-1)).focus(); //
} // if (e.key === 'Enter' || e.key === ' ') { // e.preventDefault(); //
choose(opt); // } // if (e.key === 'Escape') { // closeSelect(sel); //
btn.focus(); // } // }); // });

// function choose(opt) { // opts.forEach(o => o.setAttribute('aria-selected',
'false')); // opt.setAttribute('aria-selected', 'true');

// // оновити текст кнопки (залишаємо SVG) // const text =
opt.textContent.trim(); // btn.childNodes.forEach(n => { // if (n.nodeType
=== 3) n.nodeValue = ' ' + text; // });

// closeSelect(sel); // updateResetState();

// // подія наверх (за бажанням використовуй для реального фільтру) // const
name = sel.dataset.name || 'select'; // sel.dispatchEvent( // new
CustomEvent('filterchange', { // bubbles: true, // detail: { name, value: text
}, // }) // ); // } // }

// function openSelect(sel) { // sel.classList.add('is-open'); // sel //
.querySelector('.filters**select-label') // ?.setAttribute('aria-expanded',
'true'); // } // function closeSelect(sel) { // sel.classList.remove('is-open');
// sel // .querySelector('.filters**select-label') //
?.setAttribute('aria-expanded', 'false'); // } // function closeAll() { //
selects.forEach(closeSelect); // }

// // ====== Reset ====== // function currentValues() { // return { // search:
(inputSearch?.value || '').trim(), // sorting: selects[0] //
.querySelector('[aria-selected="true"]') // .textContent.trim(), // genre:
selects[1] // .querySelector('[aria-selected="true"]') // .textContent.trim(),
// }; // }

// function updateResetState() { // const v = currentValues(); // const dirty =
// v.search !== defaults.search || // v.sorting !== defaults.sorting || //
v.genre !== defaults.genre; // btnReset.disabled = !dirty; // }

// btnReset.addEventListener('click', () => { // if (btnReset.disabled) return;

// // 1) пошук // if (inputSearch) inputSearch.value = defaults.search;

// // 2) селекти — на перші значення й повернути плейсхолдери //
selects.forEach(sel => { // const first = sel.querySelector("[role='option']");
// sel // .querySelectorAll("[role='option']") // .forEach(li =>
li.setAttribute('aria-selected', 'false')); // if (first)
first.setAttribute('aria-selected', 'true');

// const label = sel.querySelector('.filters\_\_select-label'); // const
placeholder = // sel.dataset.name === 'sorting' // ? 'Sorting' // :
sel.dataset.name === 'genre' // ? 'Genre' // : first?.textContent.trim(); //
label.childNodes.forEach(n => { // if (n.nodeType === 3) n.nodeValue = ' ' +
placeholder; // }); // closeSelect(sel); // });

// section.dispatchEvent(new CustomEvent('filtersreset', { bubbles: true })); //
updateResetState(); // });

// // live-перерахунок стану // inputSearch?.addEventListener('input',
updateResetState);

// updateResetState(); // });

/_ ###################################################################### _/
