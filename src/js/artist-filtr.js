const API_BASE = 'https://ken4ik77.github.io/Falcons-2/ '; // приклад: "https://api.example.com"
const ENDPOINTS = {
  genres: () => `${API_BASE}/genres`,
  artists: params =>
    `${API_BASE}/artists?${new URLSearchParams(params).toString()}`,
};

const STATE = {
  page: 1,
  perPage: 8, // підлаштуй під макет
  totalPages: 1,
  q: '',
  genre: '', // за замовчуванням жанр не обрано
  sort: '', // за замовчуванням без сортування
};

document.addEventListener('DOMContentLoaded', init);

function $(sel, root = document) {
  return root.querySelector(sel);
}
function $all(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function init() {
  const section = $('#Artists');
  if (!section) return;

  const btnReset = section.querySelector('.filters__reset');
  const inputSearch = section.querySelector('.filters__input');
  const btnSearch = section.querySelector('.filters__search-btn');
  const selects = $all('.filters__select', section);
  const genresMenu = section.querySelector('[data-genres]');
  const grid = section.querySelector('[data-artists-grid]');
  const loader = section.querySelector('[data-artists-loader]');
  const pager = section.querySelector('[data-pagination]');

  // 1) Заповнити жанри з API
  loadGenres();

  // 2) Ініціалізація селектів
  selects.forEach(initSelect);

  // Закривати всі селекти при кліку поза ними
  document.addEventListener('click', e => {
    selects.forEach(sel => {
      if (!sel.contains(e.target)) closeSelect(sel);
    });
  });

  // Пошук: Enter або клік по кнопці
  inputSearch.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runSearch();
    }
  });
  btnSearch.addEventListener('click', runSearch);

  function runSearch() {
    STATE.q = inputSearch.value.trim();
    STATE.page = 1;
    fetchAndRender();
    updateResetState();
  }

  // Reset
  btnReset.addEventListener('click', () => {
    if (btnReset.disabled) return;
    // поле пошуку
    inputSearch.value = '';
    STATE.q = '';
    // селекти — скинути вибір і повернути плейсхолдер
    selects.forEach(sel => resetSelect(sel));
    // стейт
    STATE.genre = '';
    STATE.sort = '';
    STATE.page = 1;
    fetchAndRender();
    updateResetState();
  });

  // Початкове завантаження першої сторінки без фільтрів
  fetchAndRender();
  updateResetState();

  // ===== helpers for selects =====
  function initSelect(sel) {
    const btn = sel.querySelector('.filters__select-label');
    const menu = sel.querySelector('.filters__menu');
    const getOpts = () => Array.from(menu.querySelectorAll("[role='option']"));

    btn.addEventListener('click', () => {
      const open = !sel.classList.contains('is-open');
      closeAll();
      if (open) openSelect(sel);
      else closeSelect(sel);
    });

    menu.addEventListener('keydown', e => {
      const opts = getOpts();
      const i = opts.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        (opts[i + 1] || opts[0])?.focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        (opts[i - 1] || opts.at(-1))?.focus();
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const li = document.activeElement;
        if (li?.getAttribute('role') === 'option') onChoose(li);
      }
      if (e.key === 'Escape') {
        closeSelect(sel);
        btn.focus();
      }
    });
  }

  function resetSelect(sel) {
    sel
      .querySelectorAll("[role='option']")
      .forEach(li => li.setAttribute('aria-selected', 'false'));
    const labelSpan = sel.querySelector('.filters__select-label span');
    labelSpan.textContent =
      sel.dataset.name === 'sorting' ? 'Sorting' : 'Genre';
    closeSelect(sel);
  }
  function openSelect(sel) {
    sel.classList.add('is-open');
    sel
      .querySelector('.filters__select-label')
      ?.setAttribute('aria-expanded', 'true');
  }
  function closeSelect(sel) {
    sel.classList.remove('is-open');
    sel
      .querySelector('.filters__select-label')
      ?.setAttribute('aria-expanded', 'false');
  }
  function closeAll() {
    $all('.filters__select.is-open', section).forEach(closeSelect);
  }

  function currentValues() {
    const sortingSel = selects.find(s => s.dataset.name === 'sorting');
    const genreSel = selects.find(s => s.dataset.name === 'genre');
    const getSelectedText = sel =>
      sel.querySelector("[aria-selected='true']")?.textContent.trim() || '';
    return {
      search: inputSearch.value.trim(),
      sorting: getSelectedText(sortingSel),
      genre: getSelectedText(genreSel),
    };
  }

  function updateResetState() {
    const v = currentValues();
    const dirty = v.search !== '' || v.sorting !== '' || v.genre !== '';
    btnReset.disabled = !dirty;
  }

  // ===== Data layer =====
  async function loadGenres() {
    try {
      const res = await fetch(ENDPOINTS.genres());
      const data = await res.json();
      // Очікуємо масив жанрів: [{id, name}] або масив рядків
      const items = Array.isArray(data) ? data : data?.items || [];
      const genres = items.map(g =>
        typeof g === 'string' ? { id: g, name: g } : g
      );
      // Створюємо список: перший пункт — "(не обрано)"
      const frag = document.createDocumentFragment();
      const first = document.createElement('li');
      first.role = 'option';
      first.tabIndex = 0;
      first.dataset.value = '';
      first.setAttribute('aria-selected', 'false');
      first.textContent = '(не обрано)';
      frag.appendChild(first);
      for (const g of genres) {
        const li = document.createElement('li');
        li.role = 'option';
        li.tabIndex = 0;
        li.dataset.value = g.id ?? g.name;
        li.setAttribute('aria-selected', 'false');
        li.textContent = g.name ?? String(g);
        frag.appendChild(li);
      }
      genresMenu.innerHTML = '';
      genresMenu.appendChild(frag);
    } catch (err) {
      console.error('Failed to load genres', err);
      // Фолбек: мінімальний список, щоб UI був працездатним
      genresMenu.innerHTML = `
<li role="option" tabindex="0" data-value="" aria-selected="false">(не обрано)</li>
<li role="option" tabindex="0" data-value="rock" aria-selected="false">Rock</li>
<li role="option" tabindex="0" data-value="pop" aria-selected="false">Pop</li>
<li role="option" tabindex="0" data-value="jazz" aria-selected="false">Jazz</li>`;
    }
  }
  async function fetchAndRender() {
    empty.className = 'empty';
    empty.textContent = 'За вашим запитом нічого не знайдено.';
    grid.appendChild(empty);
    pager.hidden = true; // Не показувати пагінатор при пустому результаті
    return;
  }
  const tpl = document.getElementById('artist-item-tpl');
  const frag = document.createDocumentFragment();
  for (const it of items) {
    const li = tpl.content.firstElementChild.cloneNode(true);
    const img = li.querySelector('.artist-card__img');
    const name = li.querySelector('.artist-card__name');
    const genre = li.querySelector('.artist-card__genre');
    img.src = it.photo || it.image || 'https://picsum.photos/600/400';
    img.alt = `Portrait of ${it.name || 'artist'}`;
    name.textContent = it.name || 'Unknown Artist';
    const genres = it.genres || it.genre || [];
    genre.textContent = Array.isArray(genres)
      ? genres.join(', ')
      : String(genres || '');
    frag.appendChild(li);
  }
  grid.appendChild(frag);
}

function renderPagination() {
  // Якщо лише одна сторінка і є результати — можна ховати
  if (STATE.totalPages <= 1) {
    pager.hidden = true;
    pager.innerHTML = '';
    return;
  }
  pager.hidden = false;
  pager.innerHTML = '';
  const mkBtn = (label, page, opts = {}) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    if (opts.title) b.title = opts.title;
    if (opts.current) b.classList.add('is-current');
    if (opts.disabled) b.disabled = true;
    b.addEventListener('click', () => {
      if (b.disabled) return;
      STATE.page = page;
      fetchAndRender();
      window.scrollTo({
        top: document.querySelector('#Artists').offsetTop,
        behavior: 'smooth',
      });
    });
    return b;
  };

  const prev = mkBtn('‹', Math.max(1, STATE.page - 1), {
    title: 'Previous',
    disabled: STATE.page === 1,
  });
  pager.appendChild(prev);

  // Проста стратегія відображення сторінок: до 7 кнопок
  const total = STATE.totalPages;
  const pages = calcPageRange(STATE.page, total, 7);
  pages.forEach(p => {
    if (p === '…') {
      const span = document.createElement('span');
      span.textContent = '…';
      span.style.minWidth = '16px';
      span.style.textAlign = 'center';
      pager.appendChild(span);
    } else {
      pager.appendChild(mkBtn(String(p), p, { current: p === STATE.page }));
    }
  });

  const next = mkBtn('›', Math.min(total, STATE.page + 1), {
    title: 'Next',
    disabled: STATE.page === total,
  });
  pager.appendChild(next);
}

function calcPageRange(current, total, max = 7) {
  if (total <= max) return Array.from({ length: total }, (_, i) => i + 1);
  const range = [1];
  const windowSize = max - 2; // лишаємо місце для 1 та останньої
  let start = Math.max(2, current - Math.floor(windowSize / 2));
  let end = Math.min(total - 1, start + windowSize - 1);
  if (end - start + 1 < windowSize) start = Math.max(2, end - windowSize + 1);
  if (start > 2) range.push('…');
  for (let p = start; p <= end; p++) range.push(p);
  if (end < total - 1) range.push('…');
  range.push(total);
  return range;
}
