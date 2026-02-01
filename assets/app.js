// Tiny JS to keep the page framework-free.
(function () {
  // Mobile nav toggle
  const headerNav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".nav-links a");

  if (toggle && headerNav) {
    toggle.addEventListener("click", () => {
      const isOpen = headerNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((a) =>
      a.addEventListener("click", () => {
        headerNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Lightbox modal (iframes: Connect + Sample Report)
  const modal = document.getElementById("lightbox");
  const iframe = document.getElementById("modal-iframe");
  const titleEl = document.getElementById("modal-title");

  if (!modal || !iframe) return;

  let lastFocus = null;

  function openModal(src, title) {
    lastFocus = document.activeElement;

    if (titleEl) titleEl.textContent = title || "";
    iframe.setAttribute("title", title || "Modal content");

    // Navigate the iframe
    if (src) iframe.src = src;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-modal-open");

    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-modal-open");

    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  // Open modal on click for any element with data-modal-src
  document.querySelectorAll("[data-modal-src]").forEach((el) => {
    el.addEventListener("click", (e) => {
      // Allow opening in a new tab/window with modifier keys
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      const src = el.getAttribute("data-modal-src");
      const title =
        el.getAttribute("data-modal-title") ||
        (el.textContent ? el.textContent.trim() : "");

      openModal(src, title);
    });
  });

  // Close modal: backdrop + X button (both have data-close-modal)
  modal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  // Escape key closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
