import { testWebP } from './module/testWebP.js';
import { dropdownType1 } from './module/dropdownType1.js';
import { initMobileMenu } from './module/initMobileMenu.js';
import { initCookiesModal } from './module/initCookiesModal.js';
import { counterAnim } from './module/counterAnim.js';
import { initSwiper } from './module/swiper.js';

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

if (document.querySelectorAll('.drop-down-type-1').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      dropdownType1();
    });
  })();
}

if (document.querySelectorAll('.js-menu').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initMobileMenu();
    });
  })();
}

if (document.querySelectorAll('.cookie').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initCookiesModal();
    });
  })();
}

if (document.querySelectorAll('.counter').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      counterAnim();
    });
  })();
}

if (document.querySelectorAll('.swiper-container').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initSwiper();
    });
  })();
}