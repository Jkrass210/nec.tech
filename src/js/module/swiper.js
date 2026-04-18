export function initSwiper() {
  // Общие параметры для всех слайдеров
  const commonOptions = {};

  // Инициализация всех слайдеров с базовыми параметрами
  const sliders = document.querySelectorAll('.swiper-container');

  sliders.forEach((slider) => {
    // Проверка типа элемента
    if (slider instanceof HTMLElement) {
      // Уникальные параметры для каждого слайдера через класс
      let uniqueOptions = { ...commonOptions };

      if (slider.classList.contains('swiper-dev')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          spaceBetween: 16,
          //observer: true,
          //observeParents: true,
          breakpoints: {
            500: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            750: {
              slidesPerView: 2.3,
              spaceBetween: 24,
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
          navigation: {
            nextEl: slider.querySelector('.swiper-nav__btn.--next'),
            prevEl: slider.querySelector('.swiper-nav__btn.--prev'),
          },
        }
      }

      if (slider.classList.contains('swiper-rely')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: "auto",
          spaceBetween: 24,
          initialSlide: 1,
          //observer: true,
          //observeParents: true,
          breakpoints: {
            750: {
              spaceBetween: 32,
            },
            1150: {
              spaceBetween: 56,
            },
          },
        }
      }

      if (slider.classList.contains('swiper-news')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          spaceBetween: 16,
          //observer: true,
          //observeParents: true,
          breakpoints: {
            620: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            750: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
          navigation: {
            nextEl: slider.querySelector('.swiper-nav__btn.--next'),
            prevEl: slider.querySelector('.swiper-nav__btn.--prev'),
          },
        }
      }

      if (slider.classList.contains('swiper-decision')) {
        
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          centeredSlides: true,
          watchSlidesProgress: true,
          //observer: true,
          //observeParents: true,
          effect: 'creative',
          creativeEffect: {
            prev: {
              translate: [0, 8, -200],
              scale: 0.85,
            },
            next: {
              translate: [0, -18, -16],
              scale: 0.99,
            },
          },
          //speed: 600,
          //effect: 'fade',
          /*fadeEffect: {
            crossFade: true
          },*/
          navigation: {
            nextEl: slider.querySelector('.swiper-btn-type-1.--next'),
            prevEl: slider.querySelector('.swiper-btn-type-1.--prev'),
          },
          on: {
            progress(swiper) {
              swiper.slides.forEach(slide => {
                slide.style.setProperty('--swiper-slide-progress', slide.progress);
              });
            },
          },
          
        };
      }
      

      // Инициализируем слайдер с уникальными параметрами
      const swiper = new Swiper(slider, uniqueOptions);
    }
  });
}