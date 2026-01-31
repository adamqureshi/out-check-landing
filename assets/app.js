// Tiny JS to keep the page framework-free.
(function () {
  const headerNav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".nav-links a");

  if (toggle && headerNav) {
    toggle.addEventListener("click", () => {
      const isOpen = headerNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((a) => a.addEventListener("click", () => {
      headerNav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Tabs
  const tabButtons = document.querySelectorAll("[data-tab]");
  const panels = document.querySelectorAll("[data-panel]");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      tabButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });

      panels.forEach((p) => {
        const isActive = p.getAttribute("data-panel") === target;
        p.classList.toggle("is-active", isActive);
        p.setAttribute("aria-hidden", String(!isActive));
      });
    });
  });

  // Buyer form: redirect if they paste a link. Otherwise, send them to /r/<code>.
  // TODO: Replace this with your real buyer verify route.
  const buyerForm = document.getElementById("buyerForm");
  if (buyerForm) {
    buyerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("reportInput");
      const value = (input?.value || "").trim();

      if (!value) return;

      if (value.startsWith("http://") || value.startsWith("https://")) {
        window.location.href = value;
        return;
      }

      // Basic code clean-up for copy/paste.
      const code = value.replace(/[^a-zA-Z0-9_-]/g, "");
      window.location.href = `/r/${code}`;
    });
  }
})();
