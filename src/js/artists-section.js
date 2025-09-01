// Demo data (заміниш на реальні з API, якщо буде)
const ARTISTS = [
  {
    id: 1,
    name: 'Adele',
    year: 2008,
    rating: 4.9,
    popular: 100,
    img: 'img/artists/adele.jpg',
  },
  {
    id: 2,
    name: 'Beyoncé',
    year: 2003,
    rating: 4.8,
    popular: 98,
    img: 'img/artists/beyonce.jpg',
  },
  {
    id: 3,
    name: 'Coldplay',
    year: 2000,
    rating: 4.7,
    popular: 96,
    img: 'img/artists/coldplay.jpg',
  },
  {
    id: 4,
    name: 'Drake',
    year: 2010,
    rating: 4.6,
    popular: 95,
    img: 'img/artists/drake.jpg',
  },
  {
    id: 5,
    name: 'Eminem',
    year: 1999,
    rating: 4.9,
    popular: 99,
    img: 'img/artists/eminem.jpg',
  },
  {
    id: 6,
    name: 'The Weeknd',
    year: 2013,
    rating: 4.7,
    popular: 97,
    img: 'img/artists/weeknd.jpg',
  },
];

// Безпечне отримання елементів
const listEl = document.getElementById('artists-list');
const sortEl = document.getElementById('artists-sort');

if (listEl && sortEl) {
  let current = [...ARTISTS];

  const render = items => {
    listEl.innerHTML = items
      .map(item => (
        <li class="artist-card">
          <img
            class="artist-card__img"
            src="${item.img}"
            alt="${item.name}"
            loading="lazy"
          />
          <div class="artist-card__body">
            <h3 class="artist-card__name">${item.name}</h3>
            <p class="artist-card__meta">
              <span>${item.year}</span>
              <span class="artist-card__rating">★ ${item.rating}</span>
            </p>
          </div>
        </li>
      ))
      .join('');
  };

  const sortData = value => {
    switch (value) {
      case 'popular':
        current.sort((a, b) => b.popular - a.popular);
        break;
      case 'name-az':
        current.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-za':
        current.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'year-new':
        current.sort((a, b) => b.year - a.year);
        break;
      case 'year-old':
        current.sort((a, b) => a.year - b.year);
        break;
      case 'rating':
        current.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    render(current);
  };

  // init
  render(current);
  sortData(sortEl.value);

  sortEl.addEventListener('change', e => sortData(e.target.value));
}
