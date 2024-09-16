// REVIEW SLIDER SETTING START HERE
var swiper = new Swiper(".reviewSwiper", {
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1600: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },
    2200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    2500: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// Ensure swiper instance is fully initialized before using slideTo
swiper.on("init", function () {
  swiper.slideTo(2, 0);
});

// INITIALIZE SWIPER
swiper.init();

//