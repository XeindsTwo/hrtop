import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiperCases = new Swiper(".cases__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  keyboard: {
    enabled: true,
  }
});

const swiperSpecialists = new Swiper(".specialists__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  navigation: {
    prevEl: ".specialists--prev",
    nextEl: ".specialists--next"
  },
  keyboard: {
    enabled: true,
  }
});

const swiperPersonal = new Swiper(".personal__swiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: ".personal--prev",
    nextEl: ".personal--next"
  },
  keyboard: {
    enabled: true,
  }
});