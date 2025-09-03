import axios from 'axios';

import { listenArtistsSection } from './artist-modal.js';
import icons from '../img/icons.svg'

export async function getArtists(page = 1, limit = 8) {
  const response = await axios.get('/artists', {
    params: { page, limit },
  });
  return response.data;
}

function createArtistCard(artist) {
  return `
    <li class="artist-card">
      <img
        class="artist-photo"
        src="${artist.strArtistThumb || 'https://via.placeholder.com/150'}"
        alt="${artist.strArtist}"
      />

      <ul class="artist-genres">
        ${artist.genres?.map(genre => `<li>${genre}</li>`).join('') || ''}
      </ul>

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
        <svg class="icon-artists-learn-more" width="8" height="24">
          <use xlink:href="${icons}#icon-artist-svg-1"></use>
        </svg>
      </button>
    </li>
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

/* #################################################################### */

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.artists-section');
  if (!section) return;

  const btnReset = section.querySelector('.filters__reset');
  const inputSearch = section.querySelector('.filters__input');
  const selects = [...section.querySelectorAll('.filters__select')];

  const defaults = { search: '', sorting: 'Default', genre: 'All Genres' };

  // ====== ініт селектів ======
  selects.forEach(initSelect);

  // закривати всі селекти при кліку назовні
  document.addEventListener('click', e => {
    selects.forEach(sel => {
      if (!sel.contains(e.target)) closeSelect(sel);
    });
  });

  function initSelect(sel) {
    const btn = sel.querySelector('.filters__select-label');
    const menu = sel.querySelector('.filters__menu');
    const opts = [...menu.querySelectorAll("[role='option']")];

    btn.addEventListener('click', () => {
      const open = !sel.classList.contains('is-open');
      closeAll();
      if (open) openSelect(sel);
      else closeSelect(sel);
    });

    // клавіатура на кнопці
    btn.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        openSelect(sel);
        opts[0].focus();
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
      if (e.key === 'Escape') closeSelect(sel);
    });

    // опції
    opts.forEach((opt, i) => {
      opt.setAttribute('tabindex', '0');

      opt.addEventListener('click', () => choose(opt));
      opt.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          (opts[i + 1] || opts[0]).focus();
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          (opts[i - 1] || opts.at(-1)).focus();
        }
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          choose(opt);
        }
        if (e.key === 'Escape') {
          closeSelect(sel);
          btn.focus();
        }
      });
    });

    function choose(opt) {
      opts.forEach(o => o.setAttribute('aria-selected', 'false'));
      opt.setAttribute('aria-selected', 'true');

      // оновити текст кнопки (залишаємо SVG)
      const text = opt.textContent.trim();
      btn.childNodes.forEach(n => {
        if (n.nodeType === 3) n.nodeValue = ' ' + text;
      });

      closeSelect(sel);
      updateResetState();

      // подія наверх (за бажанням використовуй для реального фільтру)
      const name = sel.dataset.name || 'select';
      sel.dispatchEvent(
        new CustomEvent('filterchange', {
          bubbles: true,
          detail: { name, value: text },
        })
      );
    }
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
    selects.forEach(closeSelect);
  }

  // ====== Reset ======
  function currentValues() {
    return {
      search: (inputSearch?.value || '').trim(),
      sorting: selects[0]
        .querySelector('[aria-selected="true"]')
        .textContent.trim(),
      genre: selects[1]
        .querySelector('[aria-selected="true"]')
        .textContent.trim(),
    };
  }

  function updateResetState() {
    const v = currentValues();
    const dirty =
      v.search !== defaults.search ||
      v.sorting !== defaults.sorting ||
      v.genre !== defaults.genre;
    btnReset.disabled = !dirty;
  }

  btnReset.addEventListener('click', () => {
    if (btnReset.disabled) return;

    // 1) пошук
    if (inputSearch) inputSearch.value = defaults.search;

    // 2) селекти — на перші значення й повернути плейсхолдери
    selects.forEach(sel => {
      const first = sel.querySelector("[role='option']");
      sel
        .querySelectorAll("[role='option']")
        .forEach(li => li.setAttribute('aria-selected', 'false'));
      if (first) first.setAttribute('aria-selected', 'true');

      const label = sel.querySelector('.filters__select-label');
      const placeholder =
        sel.dataset.name === 'sorting'
          ? 'Sorting'
          : sel.dataset.name === 'genre'
          ? 'Genre'
          : first?.textContent.trim();
      label.childNodes.forEach(n => {
        if (n.nodeType === 3) n.nodeValue = ' ' + placeholder;
      });
      closeSelect(sel);
    });

    section.dispatchEvent(new CustomEvent('filtersreset', { bubbles: true }));
    updateResetState();
  });

  // live-перерахунок стану
  inputSearch?.addEventListener('input', updateResetState);

  updateResetState();
});

/* ###################################################################### */
