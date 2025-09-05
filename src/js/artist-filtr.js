// artist-filtr.js

// ✅ (1) Масив для артистів (щоб не було ReferenceError)
let items = [];

// ✅ (2) Сет для даних з API
function setItems(payload) {
  items = Array.isArray(payload)
    ? payload
    : payload?.results || payload?.artists || [];
}

// Базова URL
const BASE_URL = 'https://sound-wave.b.goit.study/api/artists';

// ✅ (3) Побудова URL без порожніх параметрів
function buildUrl({
  page = 1,
  perPage = 8, // локальна змінна для стану
  // search = '', genre = '', sort = '', // більше не відправляємо на сервер
} = {}) {
  const params = new URLSearchParams();

  params.set('page', Number(page) || 1);

  // ⚡ для API сервер очікує "limit" замість "perPage"
  params.set('limit', Number(perPage) || 8);

  // ❌ сервер не підтримує search, genre, sort
  // if (search && search.trim()) params.set('search', search.trim());
  // if (genre && genre.trim()) params.set('genre', genre.trim());
  // if (sort && sort.trim()) params.set('sort', sort.trim());

  return `${BASE_URL}?${params.toString()}`;
}

// ✅ (4) Запит до API з обробкою помилок
async function fetchArtists(opts = {}) {
  const url = buildUrl(opts);
  console.log('[artists] GET →', url);

  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Bad Request ${res.status}: ${text}`);
  }

  const data = await res.json();
  setItems(data);
  return items;
}

// ==================== UI ====================

// Елементи з HTML
const searchInput = document.querySelector('#artist-search'); // поле пошуку
const searchBtn = document.querySelector('.filters__search-btn'); // кнопка пошуку
const resetBtn = document.querySelector('.filters__reset'); // reset
const sortMenu = document.querySelector('[data-name="sorting"] .filters__menu'); // список сортування
const genreMenu = document.querySelector('[data-genres]'); // жанри
const artistsGrid = document.querySelector('[data-artists-grid]'); // сітка артистів
const loadMoreBtn = document.querySelector('[data-artists-load]'); // Load more

// Стан фільтрів
let state = { page: 1, perPage: 8, search: '', genre: '', sort: '' };

// ✅ (5) Рендер однієї картки
function renderCard(artist) {
  const tpl = document.querySelector('#artist-item-tpl');
  const clone = tpl.content.cloneNode(true);

  clone.querySelector('.artist-card__img').src =
    artist.image || '/img/no-image.png';
  clone.querySelector('.artist-card__name').textContent = artist.name;
  clone.querySelector('.artist-card__genre').textContent =
    artist.genre || 'Unknown';

  return clone;
}

// ✅ (6) Повний рендер
function renderCards(list) {
  artistsGrid.innerHTML = '';
  list.forEach(artist => {
    artistsGrid.appendChild(renderCard(artist));
  });
  loadMoreBtn.hidden = list.length < state.perPage; // показуємо кнопку, якщо є більше
}

// ✅ (7) Додавання (Load more)
function appendCards(list) {
  list.forEach(artist => {
    artistsGrid.appendChild(renderCard(artist));
  });
}

// ==================== Event Listeners ====================

// Пошук (кнопка) — залишаємо для локального фільтру на фронтенді
searchBtn.addEventListener('click', async () => {
  state.page = 1;
  state.search = searchInput.value.trim(); // локальний стан

  try {
    await fetchArtists(state);
    renderCards(items);
    resetBtn.disabled = false;
  } catch (err) {
    console.error(err);
  }
});

// Сортування (клік по пункту меню) — локально
sortMenu.addEventListener('click', async e => {
  if (e.target.dataset.value !== undefined) {
    state.sort = e.target.dataset.value; // локальний стан
    state.page = 1;

    try {
      await fetchArtists(state);
      renderCards(items);
      resetBtn.disabled = false;
    } catch (err) {
      console.error(err);
    }
  }
});

// Вибір жанру — локально
genreMenu.addEventListener('click', async e => {
  if (e.target.dataset.value !== undefined) {
    state.genre = e.target.dataset.value; // локальний стан
    state.page = 1;

    try {
      await fetchArtists(state);
      renderCards(items);
      resetBtn.disabled = false;
    } catch (err) {
      console.error(err);
    }
  }
});

// Load more
loadMoreBtn.addEventListener('click', async () => {
  state.page += 1;
  try {
    await fetchArtists(state);
    appendCards(items);
  } catch (err) {
    console.error(err);
  }
});

// Reset
resetBtn.addEventListener('click', async () => {
  state = { page: 1, perPage: 8, search: '', genre: '', sort: '' };
  searchInput.value = '';

  try {
    await fetchArtists(state);
    renderCards(items);
    resetBtn.disabled = true;
  } catch (err) {
    console.error(err);
  }
});
