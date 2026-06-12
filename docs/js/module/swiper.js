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

      if (slider.classList.contains('swiper-tabs-type-1')) {

        const swiperInstance = new Swiper(slider,
          uniqueOptions = {
            ...uniqueOptions,
            init: false,
            slidesPerView: "auto",
            spaceBetween: 4,
            //observer: true,
            //observeParents: true,
            // Добавляем centeredSlidesBounds чтобы по клику на слайд он смещался полностью в зону видимости
            centeredSlidesBounds: true,
            on: {
              init: function () {
                swiperInstance.el.classList.remove('load');
                const swiper = this;

                swiper.slides.forEach((slide, index) => {
                  slide.addEventListener('click', () => {
                    // убираем активный класс у всех
                    swiper.slides.forEach(s => s.classList.remove('active'));

                    // добавляем активный текущему
                    slide.classList.add('active');

                    // прокручиваем к нему
                    swiper.slideTo(index);
                  });
                });
              },
            },
          }
        );
        
        swiperInstance.init();
        return;
      }

      if (slider.classList.contains('swiper-card-3')) {

        const swiperInstance = new Swiper(slider,
          uniqueOptions = {
            ...uniqueOptions,
            init: false,
            slidesPerView: 1,
            spaceBetween: 16,
            
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
              nextEl: slider.querySelector('.swiper-btn-type-1.--next'),
              prevEl: slider.querySelector('.swiper-btn-type-1.--prev'),
            },
            on: {
              init: function () {
                swiperInstance.el.classList.remove('load');
              },
            },
          }
        );

        swiperInstance.init();
        return;
      }

      if (slider.classList.contains('swiper-tabs-type-2')) {
        let swiperTabs2 = null;
        const mq = window.matchMedia('(max-width: 1000px)');

        function destroySwiperTabs2() {
          if (!swiperTabs2) return;
          swiperTabs2.destroy(true, true);
          swiperTabs2 = null;
        }

        function createSwiperTabs2() {
          if (swiperTabs2) return;

          swiperTabs2 = new Swiper(slider, {
            init: false,
            slidesPerView: 1,
            spaceBetween: 16,
            observer: true,
            observeParents: true,
            breakpoints: {
              550: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            },
            navigation: {
              nextEl: slider.querySelector('.swiper-btn-type-2.--next'),
              prevEl: slider.querySelector('.swiper-btn-type-2.--prev'),
            },
            on: {
              init() {
                slider.classList.remove('load');
              },
            },
          });

          swiperTabs2.init();
        }

        function toggleSwiperTabs2() {
          if (mq.matches) {
            createSwiperTabs2();
            swiperTabs2?.update();
          } else {
            destroySwiperTabs2();
          }
        }

        toggleSwiperTabs2();

        mq.addEventListener('change', toggleSwiperTabs2);

        window.addEventListener('resize', () => {
          if (mq.matches && swiperTabs2) {
            swiperTabs2.update();
          }
        });

        return;
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

      if (slider.classList.contains('swiper-similar-solutions')) {

        const swiperSimilar = new Swiper(slider,
          uniqueOptions = {
            ...uniqueOptions,
            init: false,
            slidesPerView: 1,
            spaceBetween: 16,
            //observer: true,
            //observeParents: true,
            breakpoints: {
              551: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1001: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1201: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            },
            navigation: {
              nextEl: slider.querySelector('.swiper-nav__btn.--next'),
              prevEl: slider.querySelector('.swiper-nav__btn.--prev'),
            },
            on: {
              init: function () {
                swiperSimilar.el.classList.remove('load');
              },
            },
          }
        );

        swiperSimilar.init();
        return;
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