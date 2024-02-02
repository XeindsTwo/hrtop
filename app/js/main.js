import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: ".personal--prev",
    nextEl: ".personal--next"
  },
  pagination: {
    el: ".model-content__pagination"
  },
  keyboard: {
    enabled: true,
  }
});