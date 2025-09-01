import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import Raty from 'raty-js';

import { Navigation, Pagination } from 'swiper/modules';

import 'izitoast/dist/css/iziToast.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'raty-js/src/raty.css';

export async function getReviewsByQuery() {
    const response = await axios.get('/feedbacks', {
        params: { limit: 10, page: 1 },
    });
    return response.data;
}

export async function handleReviews(reviews) {
    const wrapper = document.querySelector('div.swiper-wrapper');

    const markup = reviews.map(({ name, rating, descr }, index) =>
        `<div class="swiper-slide">
            <div class="rating" id="rating">
                <div class="stars-container stars-${index}">
                </div>
            </div>
            <p class="review">"${descr}"</p>
            <p class="review-author-name">${name}</p>
        </div>`
    ).join('');

    wrapper.insertAdjacentHTML('beforeend', markup);

    reviews.forEach((review, index) => {
        setRating(review.rating, index)
    });

    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1, 
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    document.querySelector('.swiper-button-next').addEventListener('click', () => swiper.slideNext());
    document.querySelector('.swiper-button-prev').addEventListener('click', () => swiper.slidePrev());
}

function setRating(rating, index) {
    const starsContainer = document.querySelector(`div.stars-${index}`);
    const fullStars = Math.round(rating);
    const emptyStars = 5 - fullStars;

    starsContainer.innerHTML = '';

    for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star-container');
        star.innerHTML = `
            <svg class="star my-star-filled">
                <use href="../img/icons.svg#icon-star"></use>
            </svg>`;
        starsContainer.appendChild(star);
    }

    for (let i = 0; i < emptyStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star-container');
        star.innerHTML = `
            <svg class="star my-star-empty">
                <use href="../img/icons.svg#icon-star"></use>
            </svg>`;
        starsContainer.appendChild(star);
    }
}
