let clickBound = false;

function setTabs3Active(tab, index) {
  const btns = tab.querySelectorAll('.js-tabs-3-btn');
  const boxes = tab.querySelectorAll('.js-tabs-3-box');

  if (!btns.length || !boxes.length) return;
  if (btns.length !== boxes.length + 1) return;

  btns.forEach((btn) => btn.classList.remove('active'));
  boxes.forEach((box) => box.classList.remove('active'));

  const activeBtn = btns[index];
  if (!activeBtn) return;

  activeBtn.classList.add('active');

  if (index === 0) {
    boxes.forEach((box) => box.classList.add('active'));
    return;
  }

  const activeBox = boxes[index - 1];
  if (activeBox) activeBox.classList.add('active');
}

export function initTabs3() {
  document.querySelectorAll('.js-tabs-3:not([data-tabs-3-inited])').forEach((tab) => {
    setTabs3Active(tab, 0);
    tab.setAttribute('data-tabs-3-inited', '');
  });

  if (clickBound) return;
  clickBound = true;

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.js-tabs-3-btn');
    if (!btn) return;

    const tab = btn.closest('.js-tabs-3');
    if (!tab) return;

    const btns = tab.querySelectorAll('.js-tabs-3-btn');
    const index = Array.from(btns).indexOf(btn);
    if (index === -1) return;

    setTabs3Active(tab, index);
  });
}
