const artistsList = document.getElementById('artists-list');
const sortSelect = document.getElementById('artists-sort');

let artists = [
  {
    name: 'John Doe',
    year: 2021,
    rating: 4.5,
    popular: 120,
    img: 'https://via.placeholder.com/640x400',
  },
  {
    name: 'Alice Smith',
    year: 2018,
    rating: 3.8,
    popular: 95,
    img: 'https://via.placeholder.com/640x400',
  },
  {
    name: 'Bob Johnson',
    year: 2023,
    rating: 5.0,
    popular: 300,
    img: 'https://via.placeholder.com/640x400',
  },
  {
    name: 'Charlie Brown',
    year: 2015,
    rating: 4.0,
    popular: 60,
    img: 'https://via.placeholder.com/640x400',
  },
];

// render
function renderArtists(data) {
  artistsList.innerHTML = data
    .map(artist => (
      <li class="artist-card">
        <img
          class="artist-card__img"
          src="${artist.img}"
          alt="${artist.name}"
        />
        <div class="artist-card__body">
          <h3 class="artist-card__name">${artist.name}</h3>
          <p class="artist-card__meta">
            <span class="artist-year">${artist.year}</span>
            <span class="artist-card__rating">⭐ ${artist.rating}</span>
          </p>
        </div>
      </li>
    ))
    .join('');
}

// sort
function sortArtists(criteria) {
  const sorted = [...artists];
  switch (criteria) {
    case 'name-az':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-za':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'year-new':
      sorted.sort((a, b) => b.year - a.year);
      break;
    case 'year-old':
      sorted.sort((a, b) => a.year - b.year);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
      sorted.sort((a, b) => b.popular - a.popular);
      break;
  }
  renderArtists(sorted);
}

// events + initial
if (sortSelect && artistsList) {
  sortSelect.addEventListener('change', e => sortArtists(e.target.value));
  renderArtists(artists);
}
