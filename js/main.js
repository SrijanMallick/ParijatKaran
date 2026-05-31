(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      navToggle.setAttribute(
        "aria-expanded",
        mainNav.classList.contains("open")
      );
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "index.html" && href === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const success = document.querySelector(".form-success");
      if (success) {
        success.classList.add("show");
        contactForm.reset();
        setTimeout(function () {
          success.classList.remove("show");
        }, 5000);
      }
    });
  }

  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        header.style.boxShadow = "0 1px 12px rgba(0,0,0,0.06)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }
})();
