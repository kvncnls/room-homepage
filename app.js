gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navList = document.querySelector(".nav-list");
const darkOverlay = document.querySelector(".dark-overlay");
const switchPrev = document.querySelector(".switch__previous");
const switchNext = document.querySelector(".switch__next");

/* Navbar Animations Starts */
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
  darkOverlay.style.height = "200vh";
  darkOverlay.style.width = "100vw";
}

function closeMenu() {
  nav.style.backgroundColor = "transparent";
  logo.style.display = "block";
  navList.style.display = "none";
  menuBtn.classList.remove("menu-x");
  darkOverlay.style.height = "0vh";
  darkOverlay.style.width = "0vw";
}

darkOverlay.addEventListener("click", () => {
  menuBtn.classList.remove("opened");
  closeMenu();
});

/* Navbar Animations Ends */

switchPrev.addEventListener("click", () => {
  /* If discover is displayed */
  /* Show manufactured */
  /* If manufactured is displayed */
  /* Show available */
  /* If available is displayed */
  /* Show discover */
});

switchNext.addEventListener("click", () => {
  /* If discover is displayed */
  /* Show available */
  /* If available is displayed */
  /* Show manufactured */
  /* If manufactured is displayed */
  /* Show discover */
});

/* Next / Previous Buttons */
