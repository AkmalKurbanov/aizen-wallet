import Swiper from 'swiper/bundle';


// slider in menu
new Swiper(".menu-nav-js", {
  effect: 'fade',
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
// slider in menu end

// slider comments
new Swiper(".comments-js", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".comments-next",
    prevEl: ".comments-prev",
  },
  breakpoints:{
    "500": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "768": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "992": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    "1300": {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
});
// slider comments end




// article
new Swiper(".full-width-js", {
  effect: 'fade',
  observer: true,
  observeParents: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
// article end