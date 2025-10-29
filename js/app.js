const hamMenu = document.querySelector(".ham-menu");
const xMenu = document.querySelector(".nav-close");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
});

xMenu.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
