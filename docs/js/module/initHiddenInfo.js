var isBound = false;

export function initHiddenInfo(options) {
  options = options || {};
  var rootSelector = options.rootSelector || '.js-hidden-info';
  var contentSelector = options.contentSelector || '.js-hidden-info-content';
  var btnSelector = options.btnSelector || '.js-hidden-info-btn';
  var activeClass = options.activeClass || 'active';

  if (isBound) return;
  isBound = true;

  document.addEventListener('click', function(e) {
    var button = e.target.closest(btnSelector);
    if (!button) return;

    var root = button.closest(rootSelector);
    if (!root) return;

    var content = root.querySelector(contentSelector);
    if (!content) return;

    e.preventDefault();

    var isActive = root.classList.contains(activeClass);

    if (isActive) {
      root.classList.remove(activeClass);
      button.classList.remove(activeClass);
    } else {
      root.classList.add(activeClass);
      button.classList.add(activeClass);
    }
  });
}
