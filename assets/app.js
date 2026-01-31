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
})();
