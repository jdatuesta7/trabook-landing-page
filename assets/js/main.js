import Swiper from './../../node_modules/swiper/swiper-bundle.esm.browser.min.js';

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('navbar')
    if (this.scrollY >= 1) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER ===============*/

const DestinationSwiper = new Swiper(".destination-swiper", {
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 7,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
});

const tourSwiper = new Swiper(".tour-swiper", {
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 7,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
});

const testimonialsSwiper = new Swiper(".swiper-testimonials", {
  effect: "cards",
  grabCursor: true,
});