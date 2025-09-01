import './js/artists-section.js'
import './js/menu'
// import './js/modal'
// import './js/modal-feedback'
import './js/artist-modal'
import './js/feedback'
import './js/artists-section'

import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviewsByQuery, handleReviews } from './js/feedback.js';
import { getArtists, renderArtists } from './js/artists-section.js';

// const BASE_URL = 'https://sound-wave.b.goit.study/api';
// const LIMIT = 8;

// const api = axios.create({
//   baseURL: BASE_URL,
//   timeout: 10000,
//   headers: { 'Content-Type': 'application/json' },
// });

axios.defaults.baseURL = "https://sound-wave.b.goit.study/api";

async function fetchData() {
    const currentPage = 1;
    const limit = 8;
    const artists = await getArtists(currentPage);
    console.log(`Artists: ${JSON.stringify(artists)}`);
    await renderArtists(artists, currentPage, limit);

    const reviews = await getReviewsByQuery();
    console.log(`Review: ${JSON.stringify(reviews)}`);
    await handleReviews(reviews.data);
}

fetchData();