gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navList = document.querySelector(".nav-list");
const darkOverlay = document.querySelector(".dark-overlay");

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

/* Next / Previous Buttons */

const imageDiv = document.querySelector(".main-block__image");
const image = document.querySelector(".main-block__image img");
const prevBtn = document.querySelector(".switch__previous");
const nextBtn = document.querySelector(".switch__next");

let imgNo = 1;
let prefix;

/* Create a window width detector that checks if the width is less than 410. If less than 410, use the mobile prefix.
Otherwise, use the desktop prefix.

Make this detector check for window size changes.**** */
/* Maybe use GSAP for window size changes? */
/* Use GSAP's mediaMatch */

prevBtn.addEventListener("click", () => {
  if (imgNo <= 1) {
    imgNo = 3;
  } else {
    imgNo -= 1;
  }
  if (window.innerWidth > 410) {
    prefix = "/images/desktop-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  } else {
    prefix = "/images/mobile-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  }
  /* Create imgNo --> Copy change */
  /* If 1, dsicover */
  /* If 2, available */
  /* If 3, manufacture */
});

nextBtn.addEventListener("click", () => {
  if (imgNo >= 3) {
    imgNo = 1;
  } else {
    imgNo += 1;
  }
  if (window.innerWidth > 410) {
    prefix = "/images/desktop-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  } else {
    prefix = "/images/mobile-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  }
  /* Create imgNo --> Copy change */
  /* If 1, dsicover */
  /* If 2, available */
  /* If 3, manufacture */
});
