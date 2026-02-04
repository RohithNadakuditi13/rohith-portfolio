// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu after clicking a link (mobile)
navLinks?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("show"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
