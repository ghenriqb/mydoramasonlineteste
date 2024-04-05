//Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        380:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        420:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        610:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        858:{
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1000:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
  });   
      