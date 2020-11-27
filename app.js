gsap.registerPlugin(ScrollTrigger);
/* Navbar Animations */

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("opened")) {
    menuBtn.classList.add("opened");
    showMenu();
  } else if (menuBtn.classList.contains("opened")) {
    menuBtn.classList.remove("opened");
    closeMenu();
  }
});

function showMenu() {
  nav.style.backgroundColor = "#fff";
  logo.style.display = "none";
  navList.style.display = "flex";
  menuBtn.classList.add("menu-x");
}

function closeMenu() {
  nav.style.backgroundColor = "transparent";
  logo.style.display = "block";
  navList.style.display = "none";
  menuBtn.classList.remove("menu-x");
}
