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
      <img class="artist-photo" src="${artist.strArtistThumb || 'https://via.placeholder.com/150'}" alt="${artist.strArtist}" />

      <div class="artist-genres">
        ${artist.genres
          ?.map(genre => `<span>${genre}</span>`)
          .join('') || ''}
      </div>

      <h3 class="artist-name">${artist.strArtist}</h3>
      <p class="artist-description">
        ${artist.strBiographyEN ? artist.strBiographyEN.slice(0, 100) + '...' : 'No description'}
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
