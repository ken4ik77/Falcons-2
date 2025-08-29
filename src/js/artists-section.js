import { getArtists } from './soundwave-api.js';

async function init() {
  try {
    const data = await getArtists(1);
    console.log(data);
  } catch (err) {
    console.error("Помилка при запиті:", err);
  }
}