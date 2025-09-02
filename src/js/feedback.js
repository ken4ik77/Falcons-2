import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import Raty from 'raty-js';

import { Navigation, Pagination } from 'swiper/modules';

import 'izitoast/dist/css/iziToast.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.min.css';
import starSprite from '../img/star-rating.icons.svg?raw';

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
            <div class="feedback-card">
                ${setRating(rating)}
                <p class="review">"${descr}"</p>
                <p class="review-author-name">${name}</p>
            </div>
        </div>`
    ).join('');

    wrapper.insertAdjacentHTML('beforeend', markup);

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

function setRating(rating) {
    const SPRITE_MOUNT_ID = 'star-rating-sprite';
    if (!document.getElementById(SPRITE_MOUNT_ID)) {
        const div = document.createElement('div');
        div.id = SPRITE_MOUNT_ID;
        div.style.position = 'absolute';
        div.style.width = '0';
        div.style.height = '0';
        div.style.overflow = 'hidden';
        div.innerHTML = starSprite;
        document.body.prepend(div);
    }
    const rounded = Math.round(rating);
    const stars = Array.from({ length: 5 }, (_, i) => {
        const filled = i < rounded;
        return `
            <svg class="star ${
                filled ? 'filled' : 'empty'
            }" aria-hidden="true" width="20" height="20">
            <use href="#star-filled"></use>
        </svg>`;
    }).join('');

    return `<div class="rating star-svg value-${rounded}" aria-label="Rating ${rounded} out of 5">
        <div class="star-container">${stars}</div>
        </div>`;
}
