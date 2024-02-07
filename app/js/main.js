import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header__mobile');
const anchors = document.querySelectorAll('a[href*="#"]');

menuBtn.addEventListener('click', (event) => {
  event.preventDefault();
  body.classList.toggle('body--active');
  header.classList.toggle('active');
  menuBtn.classList.toggle('active');
  menuBtn.blur();
});

function scrollToTarget(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    body.classList.remove('body--active');
    header.classList.remove('active');
    menuBtn.classList.remove('active');
    setTimeout(() => {
      const targetOffset = targetSection.offsetTop;
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }, 400);
  }
}

function handleAnchorClick(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  scrollToTarget(targetId);
}

for (const anchor of anchors) {
  anchor.addEventListener('click', handleAnchorClick);
  anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
}

const menuLinks = document.querySelectorAll('.header__link');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', handleAnchorClick);
  menuLink.addEventListener('touchstart', handleAnchorClick, {passive: true});
});

Fancybox.bind("[data-fancybox]", {});

const swiperCases = new Swiper(".cases__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 18,
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    780: {
      spaceBetween: 24,
    }
  }
});

const swiperReviews = new Swiper(".reviews__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 16,
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: ".reviews--prev",
    nextEl: ".reviews--next"
  },
  breakpoints: {
    600: {
      spaceBetween: 24,
    }
  }
});

const swiperSpecialists = new Swiper(".specialists__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  navigation: {
    prevEl: ".specialists--prev",
    nextEl: ".specialists--next"
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
    540: {
      spaceBetween: 16
    }
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