// Artists Section with filters & sorting
export async function renderArtists(data, page, limit) {
  const grid = document.querySelector('[data-artists-grid]');
  const loader = document.querySelector('[data-artists-loader]');
  const loadMoreBtn = document.querySelector('[data-artists-load]');

  loader.hidden = false;
  loadMoreBtn.hidden = true;

  grid.insertAdjacentHTML(
    'beforeend',
    data.artists.map(createArtistCard).join('')
  );

  loader.hidden = true;

  if (page * limit < data.totalArtists) {
    loadMoreBtn.hidden = false;
    listenArtistsSection();
  }
}

function createArtistCard(artist) {
  return `
<li class="artist-card">
<img class="artist-photo" src="${artist.strArtistThumb}" alt="${
    artist.strArtist
  }" />
<h3 class="artist-name">${artist.strArtist}</h3>
<div class="artist-genres">
<span>${artist.strGenre || 'Unknown'}</span>
</div>
<p class="artist-description">
${
  artist.strBiographyEN
    ? artist.strBiographyEN.slice(0, 100) + '...'
    : 'No description'
}
</p>
<button class="learn-more" data-id="${artist.idArtist}">
Learn more
</button>
</li>
`;
}

// === Artists filters (search / sort / genre / reset) ===
(() => {
  const root = document.querySelector('.artists');
  if (!root) return;

  const grid = root.querySelector('[data-artists-grid]');
  const loader = root.querySelector('[data-artists-loader]');
  const inputSearch = root.querySelector('.filters-search__input');
  const selectSort = root.querySelector('.filters-sort__select');
  const selectGenre = root.querySelector('.filters-genre__select');
  const resetBtn = root.querySelector('.filters-reset__btn');

  function filterArtists() {
    const query = inputSearch.value.toLowerCase();
    const sort = selectSort.value;
    const genre = selectGenre.value;

    let cards = [...grid.querySelectorAll('.artist-card')];

    cards.forEach(card => {
      const name = card.querySelector('.artist-name').textContent.toLowerCase();
      const genres = card
        .querySelector('.artist-genres')
        .textContent.toLowerCase();

      const matchesSearch = name.includes(query);
      const matchesGenre =
        genre === 'all' || genres.includes(genre.toLowerCase());

      card.hidden = !(matchesSearch && matchesGenre);
    });

    if (sort === 'a-z') {
      cards.sort((a, b) =>
        a
          .querySelector('.artist-name')
          .textContent.localeCompare(
            b.querySelector('.artist-name').textContent
          )
      );
    } else if (sort === 'z-a') {
      cards.sort((a, b) =>
        b
          .querySelector('.artist-name')
          .textContent.localeCompare(
            a.querySelector('.artist-name').textContent
          )
      );
    }

    grid.innerHTML = '';
    cards.forEach(card => grid.appendChild(card));
  }

  inputSearch.addEventListener('input', filterArtists);
  selectSort.addEventListener('change', filterArtists);
  selectGenre.addEventListener('change', filterArtists);
  resetBtn.addEventListener('click', () => {
    inputSearch.value = '';
    selectSort.value = 'default';
    selectGenre.value = 'all';
    filterArtists();
  });
})();
