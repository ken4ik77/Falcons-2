import '../css/artist-modal.css';
import axios from 'axios';


export async function listenArtistsSection() {
  const learnBtns = document.querySelectorAll('.learn-more');
  learnBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const artistId = btn.dataset.id;
      try {
        const response = await axios.get(`/artists/${artistId}/albums`);
        const artist = response.data;
        console.log(`Artist: ${JSON.stringify(artist)}`);

        const modal = document.querySelector('.artist-modal');
        const modalContent = document.querySelector('.artist-info');
        modalContent.innerHTML = renderArtistModal(artist);
        console.log(`modal.classList: ${modal.classList}`);
        modal.classList.remove('hidden-artist-modal');
        console.log(`modal.classList: ${modal.classList}`);
      } catch (error) {
        console.error('Error loading artist info:', error);
      }
    });
  });

  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    const modal = document.querySelector('.artist-modal');
    modal.classList.add('hidden-artist-modal');
  });
}

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
