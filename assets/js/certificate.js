const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,

  slidesPerView: 1.2,   // 🔥 This makes next slide slightly visible
  spaceBetween: 20,     // space between current & next slide

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});
