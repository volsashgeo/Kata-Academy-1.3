import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  init: false,

  slidesPerView: "auto",

  spaceBetween: 10,

  centeredSlides: "auto",

  keyboard: {
    enabled: true,
  },

  direction: "horizontal",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    delay: 500,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 60,
    slideShadows: true,
  },
});

if (window.innerWidth <= 767) {
  swiper.init();
}

let brands = document.querySelector(".brands");
let linkReadNext = document.querySelector(".link-read-next");
let linkText = document.querySelector(".link-read-next__text");
let linkPic = document.querySelector(".link-read-next__pic");

linkReadNext.addEventListener("click", function () {
  if (linkText.innerHTML === "Показать все") {
    brands.style.maxHeight = "500px";
    linkText.innerHTML = "Скрыть";
    linkPic.style.rotate = "180deg";
  } else {
    brands.style.maxHeight = "160px";
    linkText.innerHTML = "Показать все";
    linkPic.style.rotate = "0deg";
  }
});

linkReadNext.removeEventListener("click", function () {});
