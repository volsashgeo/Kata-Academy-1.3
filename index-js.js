import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  init: true,

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

if (window.innerWidth >= 768) {
  swiper.destroy();
}

let description = document.querySelector('.section-description')
let linkReadNextMain = document.querySelector(".main .link-read-next");
let linkTextMain = document.querySelector(".main .link-read-next__text");
let linkPicMain = document.querySelector(".main .link-read-next__pic");

let brands = document.querySelector(".swiper-wrapper");
let linkReadNextBrands = document.querySelector(".brands .link-read-next");
let linkTextBrands = document.querySelector(".brands .link-read-next__text");
let linkPicBrands = document.querySelector(".brands .link-read-next__pic");


linkReadNextMain.addEventListener("click", function () {
  description.classList.toggle('section-description--open-all');
  if (linkTextMain.innerHTML === "Читать далее") {
    linkTextMain.innerHTML = "Скрыть";
    linkPicMain.style.rotate = "180deg";
  } else {
    linkTextMain.innerHTML = "Читать далее";
    linkPicMain.style.rotate = "0deg";
  }
});

linkReadNextBrands.addEventListener("click", function () {
  brands.classList.toggle('brands--open-all');
  if (linkTextBrands.innerHTML === "Показать все") {
    linkTextBrands.innerHTML = "Скрыть";
    linkPicBrands.style.rotate = "180deg";
  } else {
    linkTextBrands.innerHTML = "Показать все";
    linkPicBrands.style.rotate = "0deg";
  }
});


