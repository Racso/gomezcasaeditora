/* Casa Editora Los Hermanos Gómez — light interactions only */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll reveal — skipped if the visitor prefers reduced motion
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(
    ".band > .col-narrow, .editorial__grid, .card, .founder__photo, .founder__body, .contact__card"
  );
  if (reduce || !("IntersectionObserver" in window)) {
    return; // leave everything visible
  }
  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    if (el.classList.contains("card")) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
    }
  });
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  targets.forEach(function (el) {
    io.observe(el);
  });
})();
