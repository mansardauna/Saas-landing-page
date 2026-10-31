const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".primary-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteHeader.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const isOpen = item.classList.toggle("open");
    question.setAttribute("aria-expanded", String(isOpen));
    question.querySelector("span").textContent = isOpen ? "−" : "+";
  });
});
