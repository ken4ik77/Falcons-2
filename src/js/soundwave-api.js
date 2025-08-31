import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';
const LIMIT = 8;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function getArtists(page = 1, limit = LIMIT, name, sortName, genre) {
  const params = {
    page,
    limit,
    name,
    sortName,
    genre,
  };

  const response = await api.get('/artists', { params });
  return response.data;
};

// const res = await getArtists(1, 8, 'Unlike Pluto', 'asc', 'grunge');
// console.log(res);