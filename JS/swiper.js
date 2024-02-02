var swiper = new Swiper("#SwiperOne", {
  effect: "coverflow",
  autoplay: {
    delay: 4500,
    dusabkeOnInteraction: false,
  },
  lazyLoading: true,
  loop: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 4500,
    dusabkeOnInteraction: false,
  },
});
