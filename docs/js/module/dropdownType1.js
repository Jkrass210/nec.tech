export function dropdownType1() {
  const dropdowns = document.querySelectorAll('.drop-down-type-1');

  if (!dropdowns.length) return;

  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.drop-down-type-1__btn');

    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      const isActive = dropdown.classList.contains('active');

      // закрываем все
      dropdowns.forEach(el => el.classList.remove('active'));

      // если был закрыт — открываем
      if (!isActive) {
        dropdown.classList.add('active');
      }
    });
  });

  // закрытие по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(el => el.classList.remove('active'));
    }
  });
}