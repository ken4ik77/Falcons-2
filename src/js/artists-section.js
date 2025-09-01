import axios from 'axios';

import { listenArtistsSection } from './artist-modal.js';

export async function getArtists(page = 1, limit = 8) {
  const response = await axios.get('/artists', {
    params: { page, limit },
  });
  return response.data;
}

function createArtistCard(artist) {
  return `
    <div class="artist-card">
      <img class="artist-photo" src="${
        artist.strArtistThumb || 'https://via.placeholder.com/150'
      }" alt="${artist.strArtist}" />

      <div class="artist-genres">
        ${artist.genres?.map(genre => `<span>${genre}</span>`).join('') || ''}
      </div>

      <h3 class="artist-name">${artist.strArtist}</h3>
      <p class="artist-description">
        ${
          artist.strBiographyEN
            ? artist.strBiographyEN.slice(0, 100) + '...'
            : 'No description'
        }
      </p>

      <button class="learn-more" data-id="${artist._id}">
        Learn More
        <svg class="icon-artists-learn-more" width="24" height="24">
                <use href="/img/icons.svg#icon-learn-more"></use>
              </svg>
      </button>
    </div>
  `;
}

export async function renderArtists(data, page, limit) {
  const grid = document.querySelector('[data-artists-grid]');
  const loadMoreBtn = document.querySelector('[data-artists-load]');
  const loader = document.querySelector('[data-artists-loader]');

  loader.hidden = false;
  loadMoreBtn.hidden = true;

  grid.insertAdjacentHTML(
    'beforeend',
    data.artists.map(createArtistCard).join('')
  );

  loader.hidden = true;

  if (page * limit < data.totalArtists) {
    loadMoreBtn.hidden = false;
  }

  loadMoreBtn?.addEventListener('click', async () => {
    page++;
    const artists = await getArtists(page);
    await renderArtists(artists, page, limit);
    listenArtistsSection();
  });
}
// ===== Artists filters (search / sort / genre / reset) =====
(() => {
  const root = document.querySelector('.artists');
  if (!root) return;

  const grid = root.querySelector('[data-artists-grid]');
  const loader = root.querySelector('[data-artists-loader]');
  const inputSearch = root.querySelector('.filters-search__input');
  const selectSort = root.querySelector('.filters-sort__select');
  const selectGenre = root.querySelector('.filters-genre__select');
  const btnReset = root.querySelector('.filters-reset');

  if (!grid || !inputSearch || !selectSort || !selectGenre || !btnReset) return;

  // Підтримуємо 2 варіанти розмітки картки:
  // 1) [data-artist-card] з data-name, data-genre
  // 2) .artist-card з .artist-card__name і тегами жанрів
  const readCard = (el, index) => {
    const card = { el, index, name: '', genre: 'unknown' };

    if (
      el.dataset.artistCard !== undefined ||
      el.hasAttribute('data-artist-card')
    ) {
      card.name = (el.dataset.name || '').trim();
      card.genre = (el.dataset.genre || 'unknown').trim();
      return card;
    }

    const nameEl = el.querySelector('.artist-card__name, [data-artist-name]');
    if (nameEl) card.name = nameEl.textContent.trim();

    // жанр беремо з бейджів або data-*
    const genreData = el.dataset.genre;
    if (genreData) {
      card.genre = genreData.trim();
    } else {
      const tag = el.querySelector('.artist-card__tag, [data-artist-genre]');
      if (tag) card.genre = tag.textContent.trim();
    }

    return card;
  };

  const items = Array.from(grid.children).map((el, i) => readCard(el, i));

  // Початкове (оригінальне) розташування
  const byInitial = [...items];

  const apply = () => {
    const q = inputSearch.value.trim().toLowerCase();
    const sort = selectSort.value; // 'default' | 'az' | 'za'
    const genre = selectGenre.value; // 'all' | 'rock' | ...

    // Фільтрація по пошуку + жанру
    items.forEach(({ el, name, genre: g }) => {
      const okSearch = !q || name.toLowerCase().includes(q);
      const okGenre = genre === 'all' || (g && g.toLowerCase() === genre);
      el.hidden = !(okSearch && okGenre);
    });

    // Сортування лише видимих
    const visible = items.filter(i => !i.el.hidden);

    if (sort === 'default') {
      // Повертаємо у початковому порядку (для видимих)
      visible.sort((a, b) => a.index - b.index);
    } else {
      visible.sort((a, b) => {
        const A = a.name.toLowerCase();
        const B = b.name.toLowerCase();
        if (A < B) return sort === 'az' ? -1 : 1;
        if (A > B) return sort === 'az' ? 1 : -1;
        return 0;
      });
    }

    // Переміщаємо тільки видимі елементи, приховані лишаються на місці (не заважають)
    const fragment = document.createDocumentFragment();
    items
      .filter(i => !i.el.hidden)
      .sort((a, b) => visible.indexOf(a) - visible.indexOf(b))
      .forEach(i => fragment.appendChild(i.el));

    grid.appendChild(fragment);
  };

  const reset = () => {
    inputSearch.value = '';
    selectSort.value = 'default';
    selectGenre.value = 'all';

    // Показати все
    items.forEach(i => (i.el.hidden = false));

    // Відновити початковий порядок
    const fragment = document.createDocumentFragment();
    byInitial
      .sort((a, b) => a.index - b.index)
      .forEach(i => fragment.appendChild(i.el));
    grid.appendChild(fragment);
  };

  // Події
  inputSearch.addEventListener('input', apply);
  selectSort.addEventListener('change', apply);
  selectGenre.addEventListener('change', apply);
  btnReset.addEventListener('click', reset);
})();
