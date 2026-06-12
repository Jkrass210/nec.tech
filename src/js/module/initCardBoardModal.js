const MODAL_ID = 'viewer-card-board';

let isBound = false;

const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0.601562 0.599976L12.2682 12.2666M0.601562 12.2666L12.2682 0.599976" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function closeCardBoardModal() {
  const modal = document.getElementById(MODAL_ID);
  if (!modal) return;

  modal.remove();
  document.body.classList.remove('modal-open');
  document.body.style.paddingRight = '';
}

function openCardBoardModal(contentEl) {
  closeCardBoardModal();

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = MODAL_ID;
  modal.innerHTML = `
    <div class="modal__body">
      <button class="viewer-card-board__close modal__close btn-reset js-close-modal" type="button" aria-label="Закрыть">
        ${CLOSE_ICON}
      </button>
      <div class="viewer-card-board__window"></div>
    </div>
  `;

  const windowEl = modal.querySelector('.viewer-card-board__window');
  windowEl.appendChild(contentEl.cloneNode(true));

  document.body.appendChild(modal);
  document.body.classList.add('modal-open');

  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
}

export function initCardBoardModal() {
  if (isBound) return;
  isBound = true;

  document.addEventListener('click', (event) => {
    const openBtn = event.target.closest('.js-card-board-btn');
    if (openBtn) {
      const content = openBtn.querySelector('.js-card-board-content');
      if (!content) return;

      event.preventDefault();
      openCardBoardModal(content);
      return;
    }

    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;

    const closeBtn = event.target.closest('.js-close-modal');
    if (closeBtn && modal.contains(closeBtn)) {
      closeCardBoardModal();
      return;
    }

    const modalBody = modal.querySelector('.modal__body');
    if (modalBody && !modalBody.contains(event.target)) {
      closeCardBoardModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById(MODAL_ID)) {
      closeCardBoardModal();
    }
  });
}
