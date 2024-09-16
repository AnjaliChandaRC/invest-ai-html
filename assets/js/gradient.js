// REVIEW SLIDER SETTING START HERE
var swiper = new Swiper(".reviewSwiper", {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        686: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1160: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1536: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1832: {
            slidesPerView: 4.7,
            spaceBetween: 28,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allow clicking on pagination bullets
    },
});

// Ensure swiper instance is fully initialized before using slideTo
swiper.on("init", function () {
    swiper.slideTo(2, 0);
});

// INITIALIZE SWIPER
swiper.init();
