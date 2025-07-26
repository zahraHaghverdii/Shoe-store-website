// ==================slider product==================
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  // loop: true,
  // rewind: true,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});