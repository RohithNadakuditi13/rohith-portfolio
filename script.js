const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const toTop = document.getElementById("toTop");

year.textContent = new Date().getFullYear();

// Mobile menu toggle
navToggle?.addEventListener("click", () => {
  const isOpen = navMobile.classList.toggle("show");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile menu on click
navMobile?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navMobile.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Desktop active state (click-based)
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.querySelectorAll("a").forEach(x => x.classList.remove("active"));
    a.classList.add("active");
  });
});

// Back to top
toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
