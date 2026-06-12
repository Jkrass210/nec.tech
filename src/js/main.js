import { testWebP } from './module/testWebP.js';
import { dropdownType1 } from './module/dropdownType1.js';
import { initMobileMenu } from './module/initMobileMenu.js';
import { initCookiesModal } from './module/initCookiesModal.js';
import { counterAnim } from './module/counterAnim.js';
import { initSwiper } from './module/swiper.js';
import { initScrollEdges } from './module/initScrollEdges.js';
import { initTabs1 } from './module/initTabs1.js';
import { initTabs3 } from './module/initTabs3.js';
import { initModal } from './module/initModal.js';
import { initCardBoardModal } from './module/initCardBoardModal.js';
import { initVideoIframeLoader } from './module/initVideoIframeLoader.js';
import { initDropDownFilter1 } from './module/initDropDownFilter1.js';
import { initHiddenInfo } from './module/initHiddenInfo.js';
import { initLazyVideo } from './module/initLazyVideo.js';
import { initFormValidation } from './module/initFormValidation.js';

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

if (document.querySelectorAll('.js-scroll-wrapper').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollEdges();
    });
  })();
}

if (document.querySelectorAll('.js-tabs-1').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initTabs1();
    });
  })();
}

if (document.querySelectorAll('.js-tabs-3').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initTabs3();
    });
  })();
}

if (document.querySelectorAll('.modal').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initModal();
    });
  })();
}

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    initCardBoardModal();
  });
})();

if (document.querySelectorAll('.js-open-video-iframe').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initVideoIframeLoader();
    });
  })();
}

if (document.querySelectorAll('.drop-down-filter-1').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initDropDownFilter1();
    });
  })();
}

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    initHiddenInfo();
  });
})();

if (document.querySelectorAll('.js-banner-video').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyVideo();
    });
  })();
}

if (document.querySelectorAll('.js-form').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initFormValidation();
    });
  })();
}