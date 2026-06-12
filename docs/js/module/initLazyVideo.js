export function initLazyVideo() {
  const banners = document.querySelectorAll('.js-banner-video');

  // Проверка наличия элементов
  if (!banners.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      const banner = entry.target;

      if (!entry.isIntersecting || banner.dataset.loaded) return;

      const videoSrc = banner.dataset.video;
      if (!videoSrc) return;

      banner.dataset.loaded = 'true';

      // Добавляем класс загрузки
      banner.classList.add('load');

      // Создаём iframe
      const iframe = document.createElement('iframe');
      iframe.src = videoSrc;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.frameBorder = '0';
      iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;';
      iframe.allowFullscreen = true;

      iframe.addEventListener('load', function () {
        banner.classList.remove('load');
      });

      banner.appendChild(iframe);

      // Перестаём наблюдать за этим элементом
      obs.unobserve(banner);
    });
  }, {
    threshold: 0.3
  });

  // Инициализация наблюдения
  banners.forEach(banner => observer.observe(banner));
}