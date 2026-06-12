export function initScrollEdges(options = {}) {
  const {
    wrapperSelector = '.js-scroll-wrapper',
    scrollBlockSelector = '.js-scroll-block',
    startClass = 'start-scroll',
    endClass = 'end-scroll'
  } = options;

  const wrappers = Array.from(document.querySelectorAll(wrapperSelector));
  if (!wrappers.length) return;

  function update(wrapperEl, scrollEl) {
    const { scrollTop, scrollHeight, clientHeight } = scrollEl;

    const atStart = scrollTop <= 0;
    const atEnd = scrollTop + clientHeight >= scrollHeight - 1; // -1: страховка от дробных пикселей

    wrapperEl.classList.toggle(startClass, atStart);
    wrapperEl.classList.toggle(endClass, atEnd);
  }

  wrappers.forEach((wrapperEl) => {
    const scrollEl = wrapperEl.querySelector(scrollBlockSelector);
    if (!scrollEl) return;

    const onScroll = () => update(wrapperEl, scrollEl);

    // первичная установка классов (и после отрисовки, если контент догружается/шрифты меняют высоту)
    onScroll();
    requestAnimationFrame(onScroll);

    scrollEl.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  });
}
