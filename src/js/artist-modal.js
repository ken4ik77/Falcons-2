import '../css/artist-modal.css';
import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('[data-artists-grid]');
   console.log(grid);
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.artist-info');
  const closeBtn = document.querySelector('.close');

  if (!grid || !modal || !modalContent || !closeBtn) {
    console.error('DOM elements not found!');
    return;
  }

  grid.addEventListener('click', async (e) => {
    const btn = e.target.closest('.learn-more');
    if (!btn) return;

    const artistId = btn.dataset.id;
    if (!artistId) return;

    try {
      const response = await axios.get(`/artists/${artistId}/albums`);
      const artist = response.data;

      modalContent.innerHTML = renderArtistModal(artist);
      modal.classList.remove('hidden');
    } catch (error) {
      console.error('Error loading artist info:', error);
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});

function renderArtistModal(artist) {
  return `
    <h2 class="artist-name">${artist.strArtist}</h2>
    <div class="det_info">
      <img src="${artist.strArtistThumb}" class="artist-img" alt="${artist.strArtist}">
      <ul class="artist-details">
        <li>Years active: ${artist.intFormedYear || '?'} – ${artist.intDiedYear || 'present'}</li>
        <li>Sex: ${artist.strGender || '?'}</li>
        <li>Members: ${artist.intMembers || '?'}</li>
        <li>Country: ${artist.strCountry || '?'}</li>
        <li>Biography: ${artist.strBiographyEN || 'No info'}</li>
        <li>
          Genres:
          <ul class="artist-genres">
            ${artist.genres?.map(g => `<li>${g}</li>`).join('') || 'No genres'}
          </ul>
        </li>
      </ul>
    </div>
    <div class="album-full">
      <h3 class="alb">Albums</h3>
      <div class="albums-grid">
        ${artist.albumsList?.map(album => `
          <div class="album-card">
            <h4>${album.strAlbum}</h4>
            <div class="track-table">
              <div class="track-header">
                <div>Track</div>
                <div>Time</div>
                <div>Link</div>
              </div>
              <div class="track-body">
                ${album.tracks?.map(track => `
                  <div class="track-row">
                    <div class="track-name">${track.strTrack}</div>
                    <div class="track-time">${track.strTime || ''}</div>
                    <div class="track-link">
                      ${track.movie ? `<a href="${track.movie}" target="_blank">🎬</a>` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
