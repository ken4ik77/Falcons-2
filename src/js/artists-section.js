import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';
const LIMIT = 8;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function getArtists(page = 1, limit = LIMIT) {
  const response = await api.get('/artists', {
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


const grid = document.querySelector('[data-artists-grid]');
const loadMoreBtn = document.querySelector('[data-artists-load]');
const loader = document.querySelector('[data-artists-loader]');

let currentPage = 1;

async function renderArtists(page = 1) {
  loader.hidden = false;
  loadMoreBtn.hidden = true;
  
  try {
    const data = await getArtists(page);
    console.log('API response:', data);

    grid.insertAdjacentHTML(
      'beforeend',
      data.artists.map(createArtistCard).join('')
    );

    if (page * LIMIT < data.totalArtists) {
      loadMoreBtn.hidden = false;
    }
  } catch (err) {
    console.error('Помилка завантаження артистів:', err);
  } finally {
    loader.hidden = true;
  }
}

loadMoreBtn?.addEventListener('click', async () => {
  currentPage++;
  await renderArtists(currentPage);
});

document.addEventListener('DOMContentLoaded', () => {
  renderArtists(currentPage);
});




// grid.addEventListener('click', async e => {
//   if (e.target.matches('.learn-more')) {
//     const artistId = e.target.dataset.id;
//     try {
//       const response = await api.get(`/artists/${artistId}`);
//       const artist = response.data;

//       const modalContent = document.querySelector('[data-modal-content]');
//       modalContent.innerHTML = `
//         <img src="${artist.photo}" alt="${artist.name}"/>
//         <h2>${artist.name}</h2>
//         <p>${artist.description}</p>
//       `;

//       document.querySelector('.modal').classList.remove('hidden');
//     } catch (err) {
//       console.error('Не вдалося завантажити артиста:', err);
//     }
//   }
// });