// Масив для артистів (щоб не було ReferenceError)
let items = [];

// Функція для збереження даних з API
function setItems(payload) {
  items = Array.isArray(payload)
    ? payload
    : payload?.results || payload?.artists || [];
}

// Базова URL для запитів
const BASE_URL = 'https://sound-wave.b.goit.study/api/artists';

// ==================== Функції ====================

// Функція для побудови URL з параметрами
function buildUrl({
  page = 1,
  perPage = 8,
  // search, genre, sort — більше не передаємо на сервер
} = {}) {
  const params = new URLSearchParams();

  // Сервер підтримує тільки page і limit
  params.set('page', Number(page) || 1);
  params.set('limit', Number(perPage) || 8);

  // ❌ search, genre, sort не відправляються на сервер
  // if (search && search.trim()) params.set('search', search.trim());
  // if (genre && genre.trim()) params.set('genre', genre.trim());
  // if (sort && sort.trim()) params.set('sort', sort.trim());

  return `${BASE_URL}?${params.toString()}`;
}

// Функція для запиту до API
async function fetchArtists(opts = {}) {
  const url = buildUrl(opts);
  console.log('[artists] GET →', url); // для дебагу

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
const searchInput = document.querySelector('#artist-search');
const searchBtn = document.querySelector('.filters__search-btn');
const resetBtn = document.querySelector('.filters__reset');
const sortMenu = document.querySelector('[data-name="sorting"] .filters__menu');
const genreMenu = document.querySelector('[data-genres]');
const artistsGrid = document.querySelector('[data-artists-grid]');
const loadMoreBtn = document.querySelector('[data-artists-load]');

// Стан фільтрів для фронтенду
let state = { page: 1, perPage: 8, search: '', genre: '', sort: '' };

// ==================== Рендер ====================

// Рендер однієї картки артиста
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

// Рендер усіх карток
function renderCards(list) {
  artistsGrid.innerHTML = '';
  list.forEach(artist => {
    artistsGrid.appendChild(renderCard(artist));
  });
  // Показати Load more тільки якщо більше артиcтів
  loadMoreBtn.hidden = list.length < state.perPage;
}

// Додати карти без очищення сітки (Load more)
function appendCards(list) {
  list.forEach(artist => {
    artistsGrid.appendChild(renderCard(artist));
  });
}

// ==================== Event Listeners ====================

// Пошук (локальний, не на сервер)
searchBtn.addEventListener('click', async () => {
  state.page = 1;
  state.search = searchInput.value.trim(); // використовується лише для фронтенду

  try {
    await fetchArtists(state);
    renderCards(items); // тут можна додати локальний фільтр по search
    resetBtn.disabled = false;
  } catch (err) {
    console.error(err);
  }
});

// Сортування (локально)
sortMenu.addEventListener('click', async e => {
  if (e.target.dataset.value !== undefined) {
    state.sort = e.target.dataset.value; // локально
    state.page = 1;

    try {
      await fetchArtists(state);
      renderCards(items); // можна сортувати items локально
      resetBtn.disabled = false;
    } catch (err) {
      console.error(err);
    }
  }
});

// Жанри (локально)
genreMenu.addEventListener('click', async e => {
  if (e.target.dataset.value !== undefined) {
    state.genre = e.target.dataset.value; // локально
    state.page = 1;

    try {
      await fetchArtists(state);
      renderCards(items); // можна фільтрувати items локально
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
