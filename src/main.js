import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviewsByQuery, handleReviews } from './js/feedback.js';

// import './js/menu'
// import './js/modal'
import './js/feedback'
import './js/modal-feedback'
import './js/artists-section.js'


axios.defaults.baseURL = "https://sound-wave.b.goit.study/api";

async function fetchData() {
    const reviews = await getReviewsByQuery();
    console.log(reviews);
    await handleReviews(reviews.data);
}

fetchData();
