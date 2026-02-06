(function () {
  const modal = document.getElementById('modal');
  const iframe = modal ? modal.querySelector('.modal-iframe') : null;
  const closeTargets = modal ? modal.querySelectorAll('[data-modal-close]') : [];
  const body = document.body;

  function openModal(src) {
    if (!modal || !iframe) return;
    iframe.src = src;
    modal.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal || !iframe) return;
    modal.setAttribute('aria-hidden', 'true');
    // Clear iframe after close to stop audio/video/etc
    iframe.src = 'about:blank';
    body.style.overflow = '';
  }

  // Click handlers for any element that has data-modal-src
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-modal-src]');
    if (!trigger) return;

    const src = trigger.getAttribute('data-modal-src');
    if (!src) return;

    e.preventDefault();
    openModal(src);
  });

  // Close handlers
  closeTargets.forEach((el) => {
    el.addEventListener('click', function () {
      closeModal();
    });
  });

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
