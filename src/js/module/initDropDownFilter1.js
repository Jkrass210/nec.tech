export function initDropDownFilter1(options) {
  options = options || {};
  var rootSelector = options.rootSelector || '.drop-down-filter-1';
  var btnSelector = options.btnSelector || '.drop-down-filter-1__btn';
  var boxSelector = options.boxSelector || '.drop-down-filter-1__box';
  var linkSelector = options.linkSelector || '.drop-down-filter-1__link';
  var textSelector = options.textSelector || '.text';
  var activeClass = options.activeClass || 'active';
  var disabledClass = options.disabledClass || 'disabled';

  var dropdowns = document.querySelectorAll(rootSelector);
  if (!dropdowns.length) return;

  dropdowns.forEach(function(container) {
    var button = container.querySelector(btnSelector);
    var box = container.querySelector(boxSelector);
    var textSpan = container.querySelector(textSelector);
    var links = box ? box.querySelectorAll(linkSelector) : null;
    var closeBtn = box ? box.querySelector('.js-close') : null;

    if (!button || !box || !textSpan || !links || !links.length) return;

    function closeDropdown() {
      button.classList.remove(activeClass);
      box.classList.remove(activeClass);
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    }

    function openDropdown() {
      button.classList.add(activeClass);
      box.classList.add(activeClass);
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
      updateLinksState();
    }

    function handleOutsideClick(e) {
      if (!container.contains(e.target)) {
        closeDropdown();
      }
    }

    function handleEscape(e) {
      if (e.key === 'Escape') {
        closeDropdown();
      }
    }

    function updateLinksState() {
      var currentText = (textSpan.textContent || '').trim();

      links.forEach(function(link) {
        var linkText = (link.textContent || '').trim();
        if (linkText === currentText) {
          link.classList.add(disabledClass);
        } else {
          link.classList.remove(disabledClass);
        }
      });
    }

    button.addEventListener('click', function(e) {
      e.preventDefault();

      if (button.classList.contains(activeClass)) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        textSpan.textContent = (link.textContent || '').trim();
        closeDropdown();
        updateLinksState();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closeDropdown();
      });
    }

    updateLinksState();
  });
}